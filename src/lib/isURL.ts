/**
 * URL 正在校验
 *
 * */
import isFQDN from './http/isFQDN';
import { isIP, isIPv6 } from './http/IP';

/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/


type TProtocols = Array<'http' | 'https' | 'ftp'>;
type TCheckHostMatches = Array<string | RegExp>;

export interface IIsURLDefaultUrlOptions {
  protocols: TProtocols;
  require_tld: boolean;
  require_protocol: boolean;
  require_host: boolean;
  require_port: boolean;
  require_valid_protocol: boolean;
  allow_underscores: boolean;
  allow_trailing_dot: boolean;
  allow_protocol_relative_urls: boolean;
  allow_fragments: boolean;
  allow_query_components: boolean;
  validate_length: boolean;
  disallow_auth?: boolean;
  host_whitelist?: TCheckHostMatches;
  host_blacklist?: TCheckHostMatches;
};

const default_url_options: IIsURLDefaultUrlOptions = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  allow_fragments: true,
  allow_query_components: true,
  validate_length: true,
};

const wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj: RegExp | string) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host: string, matches: TCheckHostMatches) {
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    // @ts-ignore
    if(host === match || (isRegExp(match) && match.test(host))) {
      return true;
    }
  }
  return false;
}

export default function isURL(url: any, options: Partial<IIsURLDefaultUrlOptions>) {
  if(typeof url !== "string") {
    return false
  }
  if(!url || /[\s<>]/.test(url)) {
    return false;
  }
  if(url.indexOf('mailto:') === 0) {
    return false;
  }
  const new_options = {
    ...options,
    ...default_url_options
  };

  if(options.validate_length && url.length >= 2083) {
    return false;
  }

  if(!options.allow_fragments && url.includes('#')) {
    return false;
  }

  if(!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
    return false;
  }

  let protocol, auth, host, hostname, port, port_str, split, ipv6;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if(split.length > 1) {
    protocol = split.shift().toLowerCase();
    if(new_options.require_valid_protocol && new_options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if(new_options.require_protocol) {
    return false;
  } else if(url.substr(0, 2) === '//') {
    if(!new_options.allow_protocol_relative_urls) {
      return false;
    }
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if(url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if(url === '' && !new_options.require_host) {
    return true;
  }

  split = url.split('@');
  if(split.length > 1) {
    if(new_options.disallow_auth) {
      return false;
    }
    if(split[0] === '') {
      return false;
    }
    auth = split.shift();
    if(auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
    const [user, password] = auth.split(':');
    if(user === '' && password === '') {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  const ipv6_match = hostname.match(wrapped_ipv6);
  if(ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if(split.length) {
      port_str = split.join(':');
    }
  }

  if(port_str !== null && port_str.length > 0) {
    port = parseInt(port_str, 10);
    if(!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  } else if(new_options.require_port) {
    return false;
  }

  if(new_options.host_whitelist) {
    return checkHost(host, new_options.host_whitelist);
  }
  if(!isIP(host) && !isFQDN(host, new_options) && (!ipv6 || !isIPv6(ipv6))) {
    return false;
  }

  host = host || ipv6;

  return !(new_options.host_blacklist && checkHost(host, new_options.host_blacklist));


}
