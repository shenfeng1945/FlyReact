import classnames from '../classnames'
import scopeClass from "../scopeClass";

describe('classnames', () => {
    it('接受0个 classname', () => {
        const result = classnames();
        expect(result).toEqual('')
    });
    it('接受1个 classname', () => {
        const result = classnames('a');
        expect(result).toEqual('a')
    });
    it('接受2个 classname', () => {
        const result = classnames('a', 'b');
        expect(result).toEqual('a b')
    });
    it('接受 undefined 结果不会出现undefined', () => {
        const result = classnames('a', undefined);
        expect(result).toEqual('a')
    });
    it('接受奇怪多个 classnames', () => {
        const result = classnames('a', undefined, false, null, '你好');
        expect(result).toEqual('a 你好')
    });
});

describe('scopeClass', () => {
    it('接受字符串或对象', () => {
        const sc = scopeClass('f-layout');
        expect(sc('')).toEqual('f-layout');
        expect(sc('x')).toEqual('f-layout-x');
        expect(sc({y: true,z: true})).toEqual('f-layout-y f-layout-z');
        expect(sc({y: true,z: false})).toEqual('f-layout-y');
        expect(sc({y: false,z: false})).toEqual('');
    })
});