export interface MatchedDataOptions {
    include: boolean;
    only: boolean;
}
export interface anyOpts {
    include?: boolean | undefined;
    only?: boolean | undefined;
}
export declare function matchedData(options?: Partial<MatchedDataOptions>): void;
export declare function getData(options?: MatchedDataOptions): void;
