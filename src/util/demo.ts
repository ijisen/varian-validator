export interface MatchedDataOptions {
  include: boolean;
  only: boolean;
};


// Partial<MatchedDataOptions> === anyOpts
export interface anyOpts {
  include?: boolean | undefined;
  only?: boolean | undefined;
}

export function matchedData(options: Partial<MatchedDataOptions> = {}) {
  console.log(options)
}


export function getData(options: MatchedDataOptions = { include: true, only: false }) {
  console.log(options)
}
