declare type TProtocols = Array<'http' | 'https' | 'ftp'>;
declare type TCheckHostMatches = Array<string | RegExp>;
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
}
export default function isURL(url: any, options: Partial<IIsURLDefaultUrlOptions>): boolean;
export {};
