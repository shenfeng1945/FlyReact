import classnames from '../classnames'

describe('classnames', () => {
    it('接受0个 classname', () => {
        const result = classnames()
        expect(result).toEqual('')
    })
    it('接受1个 classname', () => {
        const result = classnames('a')
        expect(result).toEqual('a')
    })
    it('接受2个 classname', () => {
        const result = classnames('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受 undefined 结果不会出现undefined', () => {
        const result = classnames('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受奇怪多个 classnames', () => {
        const result = classnames('a', undefined, false, null, '你好')
        expect(result).toEqual('a 你好')
    })
})