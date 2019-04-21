interface scopeClassOptions {
    extra: string | undefined;
}

interface nameInput {
    // 支持任意key的对象
    [K: string]: boolean
}

const scopeClass = (prefix: string) => {
    return (name: string | nameInput, options?: scopeClassOptions) => {
        let name2;
        let result;
        if(typeof name === 'string' || name === undefined){
            name2 = name;
            result = [prefix, name2].filter(Boolean).join('-');
        }else{
            name2  = Object.entries(name).filter(item => item[1]).map(item => item[0]);
            result = name2.map(item => [prefix, item].filter(Boolean).join('-')).join(' ')
        }
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ')
        }
        return result;
    }
};
export default scopeClass