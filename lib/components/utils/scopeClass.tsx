const scopeClass = (prefix: string) => {
    return (name = '') => {
        return [prefix, name].filter(Boolean).join('-')
    }
};
export default scopeClass