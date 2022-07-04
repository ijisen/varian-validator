/**
 * 密码强度验证
 *
 * */
import isValidParamsTypes from "../utils/isValidParamsTypes";

const upperCaseRegex = /^[A-Z]$/;
const lowerCaseRegex = /^[a-z]$/;
const numberRegex = /^[0-9]$/;
const symbolRegex = /^[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;

export interface IsStrongPasswordOptions {
  minLength: number;
  minLowercase: number;
  minUppercase: number;
  minNumbers: number;
  minSymbols: number;
  returnScore: boolean;
  pointsPerUnique: number;
  pointsPerRepeat: number;
  pointsForContainingLower: number;
  pointsForContainingUpper: number;
  pointsForContainingNumber: number;
  pointsForContainingSymbol: number;
}

const defaultOptions: IsStrongPasswordOptions = {
  // 最小长度
  minLength: 8,
  // 最少小写字母个数
  minLowercase: 1,
  // 最少大写字母个数
  minUppercase: 1,
  // 最少数字个数
  minNumbers: 1,
  // 最少特殊符号个数
  minSymbols: 1,
  // 返回密码强度评分
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10,
};

/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/
function countChars(str: string) {
  let result = {};
  Array.from(str).forEach((char) => {
    let curVal = result[char];
    if(curVal) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}

/* Return information about a password */
export interface IAnalysisType {
  length: number;
  uniqueChars: number;
  uppercaseCount: number;
  lowercaseCount: number;
  numberCount: number;
  symbolCount: number;
}

function analyzePassword(password: string) {
  let charMap = countChars(password);
  let analysis: IAnalysisType = {
    length: password.length,
    uniqueChars: Object.keys(charMap).length,
    uppercaseCount: 0,
    lowercaseCount: 0,
    numberCount: 0,
    symbolCount: 0,
  };
  Object.keys(charMap).forEach((char) => {
    /* istanbul ignore else */
    if(upperCaseRegex.test(char)) {
      analysis.uppercaseCount += charMap[char];
    } else if(lowerCaseRegex.test(char)) {
      analysis.lowercaseCount += charMap[char];
    } else if(numberRegex.test(char)) {
      analysis.numberCount += charMap[char];
    } else if(symbolRegex.test(char)) {
      analysis.symbolCount += charMap[char];
    }
  });
  return analysis;
}

function scorePassword(analysis: IAnalysisType, scoringOptions: IsStrongPasswordOptions) {
  let points = 0;
  points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
  points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
  if(analysis.lowercaseCount > 0) {
    points += scoringOptions.pointsForContainingLower;
  }
  if(analysis.uppercaseCount > 0) {
    points += scoringOptions.pointsForContainingUpper;
  }
  if(analysis.numberCount > 0) {
    points += scoringOptions.pointsForContainingNumber;
  }
  if(analysis.symbolCount > 0) {
    points += scoringOptions.pointsForContainingSymbol;
  }
  return points;
}

/**
 * 密码强度验证
 *
 * @param[str]  密码
 * @param[options]  验证参数
 * */
export default function isStrongPassword(str: any, options?: Partial<IsStrongPasswordOptions>) {
  if(!isValidParamsTypes(str)) {
    return false
  }
  const analysis = analyzePassword(str);
  const new_options: IsStrongPasswordOptions = {
    ...defaultOptions,
    ...options
  };
  if(new_options.returnScore) {
    return scorePassword(analysis, new_options);
  }
  return analysis.length >= new_options.minLength
    && analysis.lowercaseCount >= new_options.minLowercase
    && analysis.uppercaseCount >= new_options.minUppercase
    && analysis.numberCount >= new_options.minNumbers
    && analysis.symbolCount >= new_options.minSymbols;
}
