interface scopeClassOptions {
    extra: string | undefined;
}

interface nameInput {
    // 支持任意key的对象
    [K: string]: boolean
}

const scopeClass = (prefix: string) => {
    return (name: string | nameInput, options?: scopeClassOptions) => {
        const namesObject = typeof name === 'string' || name === undefined ?
            {[name]: name} :
            name;
        const scoped = Object.entries(namesObject)
            .filter(item => item[1] || item[1] === '')
            .map(item => item[0])
            .map(item => [prefix, item]
                .filter(Boolean)
                .join('-'))
            .join(' ');
        if (options && options.extra) {
            return [scoped, options.extra].filter(Boolean).join(' ')
        }
        return scoped;
    }
};
export default scopeClass;