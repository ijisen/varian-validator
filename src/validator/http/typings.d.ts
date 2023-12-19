/**
 *  TLD格式校验 - 传参数格式
 *  */
export interface ITldRegConfig {
  // 是否允许数字TLD号结尾, 默认: false
  allow_numeric_tld: boolean;
  // 是否允许TLD包含 -, 默认: false
  allow_hyphen_tld: boolean;
}

/**
 *  域名关键词格式校验 - 传参数格式
 *  */
export interface ILabelRegConfig {
  // 是否允许包含下划线, 默认: false
  allow_underscores: boolean;
}


/**
 *  域名格式校验 - 传参数格式
 *  */
export interface IsFQDNConfig extends ITldRegConfig {
  // 是否包含TLD, 默认: true
  require_tld: boolean;
  // 最大节点数, 默认: 127
  max_node: number,
  // 是否允许包含下划线, 默认: false
  allow_underscores: boolean;
  // 是否允许 . 号结尾, 默认: false
  allow_trailing_dot: boolean;
  // 是否允许配符 *, 默认: false
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



