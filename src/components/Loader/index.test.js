import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Loader from './'

describe('Loader', () => {
    it('Should render correctly', () => {
        const component = shallow(<Loader />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });
})
