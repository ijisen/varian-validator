/**
 * AAAA【AAAA record】  => 将域名指向一个IPV6地址
 * 使用场景：当预期是实现访问者通过 IPv6 地址访问网站，可以使用 AAAA 记录实现。
 * 主机记录：一般是指子域名的前缀（如需创建子域名为www.dns-example.com, 主机记录输入 www；如需实现dns-example.com，主机记录输入 @）
 * 解析线路：默认为必选项，未设置会导致部分用户无法访问；
 * 记录值：记录值为IP地址，填写 IPV6 地址
 * TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */
import { isIPv6 } from "@/lib/http/IP";

const isAAAA = (str: string) => {
  return isIPv6(str);

};
export default isAAAA
