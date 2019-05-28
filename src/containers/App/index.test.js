import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { App } from './';

const list = {
    items: [{ id: 1, title: 'Title' }, { id: 2, title: 'Title' }],
    loading: false
}

const init = jest.fn()

describe('Root App', () => {
    let component;

    it('Should render correctly', () => {
        component = shallow(<App list={ list } onInit={ init } />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it('Should call onInit callback on render', () => {
        expect(init.mock.calls.length).toBe(1);
    })
});
