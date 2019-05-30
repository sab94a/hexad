import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Empty from './'

describe('Loader', () => {
    it('Should render correctly', () => {
        const component = shallow(<Empty />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });
})
