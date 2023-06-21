/**
 *  TLD格式校验 - 传参数格式
 *  */
export interface ITldRegConfig {
  // 是否允许数字TLD号结尾
  allow_numeric_tld: boolean;
  // 是否允许TLD包含 -
  allow_hyphen_tld: boolean;
}

/**
 *  域名关键词格式校验 - 传参数格式
 *  */
export interface ILabelRegConfig {
  // 是否允许包含下划线
  allow_underscores: boolean;
}


/**
 *  域名格式校验 - 传参数格式
 *  */
export interface IsFQDNConfig extends ITldRegConfig {
  // 是否包含TLD
  require_tld: boolean;
  max_node: number,
  // 是否允许包含下划线
  allow_underscores: boolean;
  // 是否允许 . 号结尾
  allow_trailing_dot: boolean;
  // 是否允许配符 *
  allow_wildcard: boolean;
}

/**
 *  域名格式校验返回参数格式
 *  */
export interface isFQDNRes {
  success: boolean;
  message: string;
  regValue?: any;
}



