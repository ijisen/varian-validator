import assertString from './util/assertString';

interface DefaultIsEmptyOptions {
  ignore_whitespace: boolean;
}

const default_is_empty_options = {
  ignore_whitespace: false
};

export default function isEmpty(str: any, options?: DefaultIsEmptyOptions) {
  assertString(str);
  options = options || default_is_empty_options;

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
