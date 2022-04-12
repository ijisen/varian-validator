import { matchedData, getData } from './util/demo';
declare const validator: {
    version: string;
    matchedData: typeof matchedData;
    getData: typeof getData;
};
export default validator;
