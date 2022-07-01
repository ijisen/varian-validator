import isDomain from "../http/isDomain";

/**
 * CNAME【别名解析 - Canonical Name】  => 将域名指向另外一个域名
 *  使用场景: 当需要将域名指向另一个域名，再由另一个域名提供 IP 地址，就需要添加 CNAME 记录，最常用到 CNAME 的场景包括做 CDN、企业邮箱、全局流量管理等。
 *  主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com的解析, 主机记录输入“ www”；如需实现dns-example.com的解析，主机记录输入“@”）
 *  解析线路：默认为必填项，否则会导致部分用户无法解析。
 *  记录值：记录值为 CNAME 指向的域名，只可以填写域名。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */

const isCNAME = (str: string) => {
  return isDomain(str)
}

export default isCNAME;
