import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ListItem from './'

describe('ListItem', () => {
    const TITLE = 'TITLE';
    let component;

    it('Should render correctly', () => {
        component = shallow(<ListItem title={ TITLE }/>);
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it('Should render correct title', () => {
        const title = component.text();
        expect(title).toEqual(TITLE);
    })
})
