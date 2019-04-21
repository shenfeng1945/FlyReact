interface scopeClassOptions {
    extra: string | undefined;
}

interface nameInput {
    // 支持任意key的对象
    [K: string]: boolean
}

const scopeClass = (prefix: string) =>
    (name: string | nameInput, options?: scopeClassOptions) =>
        Object.entries(name instanceof Object ? name : {[name]: name})
            .filter(item => item[1] || item[1] === '')
            .map(item => item[0])
            .map(item => [prefix, item]
                .filter(Boolean)
                .join('-'))
            .concat(options && options.extra || [])
            .join(' ');

export default scopeClass;