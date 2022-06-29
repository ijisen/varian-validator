/**
 * NS【Name Server - 域名服务器记录】  => 将子域名指定其他DNS服务器解析
 *  使用场景：如果需要把子域名交给其他 DNS 服务商解析，就需要添加 NS 记录。
 *  主机记录：一般是指子域名的前缀（如需将子域名为www.dns-example.com 的解析授权给腾讯云解析的DNS服务器进行解析管理，只需要在主机记录处填写 www 即可）。
 *  解析线路：默认为必填项，未设置默认线路会导致部分用户无法解析。
 *  记录值：记录值为要授权的 DNS 服务器域名，例如腾讯云解析的DNS服务器域名f1g1ns1.dnspod.net。
 *  TTL：为缓存时间，数值越小，修改记录各地生效时间越快，默认为10分钟。
 *
 * */
import isDomain from "@/lib/http/isDomain";


export default (str: string) => {
  return isDomain(str)
}
