interface classnamesObj {
    [K: string]: Boolean
}
const classnames = (...names: (string | undefined | classnamesObj)[]) => {
    let mergeObj: classnamesObj = {};
    names.filter(name => name instanceof Object).forEach(name => mergeObj = Object.assign({},mergeObj,name))
    const objString = Object.keys(mergeObj).length ? Object.entries(mergeObj).map(item => item[1] && item[0]).join(' ') : '';
    return names.filter(name => typeof name === 'string').join(' ') + objString;
};
export default classnames



