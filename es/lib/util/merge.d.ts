export default function merge(obj: {
    [propName: string]: any;
} | undefined, defaults: {
    [propName: string]: any;
}): {
    [propName: string]: any;
};
