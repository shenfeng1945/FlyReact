import Icon from '../icon'
import renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme';

describe('Icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name="qq" />).toJSON()
        expect(json).toMatchSnapshot();
    })
    it('icon click', () => {
        const fn = jest.fn()
        const component = mount(<Icon name="qq" onClick={fn} />)
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    })
})