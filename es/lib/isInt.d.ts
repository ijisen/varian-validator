export default function isInt(str: any, options: {
    allow_leading_zeroes?: Boolean;
    min?: number;
    max?: number;
    lt?: number;
    gt?: number;
}): boolean;
