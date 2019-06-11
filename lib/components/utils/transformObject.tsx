// 拍平一层数组
const flatArray = (array: Array<any>) => {
    let result: Array<any> = [];
    array.forEach(a => {
        if(a instanceof Array){
            result.push(...a)
        }else{
            result.push(a)
        }
    });
    return result;
};
// 深度拍平
const deepFlatten = (arr: Array<any>): Array<any> => [].concat(...arr.map(v => Array.isArray(v)? deepFlatten(v) : v));

export {
    flatArray,
    deepFlatten
}