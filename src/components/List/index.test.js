import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ListItem from 'components/ListItem';
import Loader from 'components/Loader';
import Empty from 'components/Empty';
import List from './';

const ITEMS = [
    { id: 1, title: 'Title 1', image: 'src', rate: 1, description: 'test' },
    { id: 2, title: 'Title 2', image: 'src', rate: 1, description: 'test' },
    { id: 3, title: 'Title 3', image: 'src', rate: 1, description: 'test' }
];

describe('List', () => {
    let component;

    it('Should render correct amount of item', () => {
        component = shallow(<List items={ ITEMS }/>);

        expect(shallowToJson(component)).toMatchSnapshot();
        expect(component.find(ListItem)).toHaveLength(ITEMS.length);
    });

    it('Should render loading status insted of items', () => {
        component = shallow(<List items={ ITEMS } loading={ true } />);

        expect(shallowToJson(component)).toMatchSnapshot();
        expect(component.find(Loader)).toHaveLength(1);
        expect(component.find(ListItem)).toHaveLength(0);
    });

    it('Should render empty status insted of items if array is empty', () => {
        component = shallow(<List items={ [] } />);

        expect(shallowToJson(component)).toMatchSnapshot();
        expect(component.find(Empty)).toHaveLength(1);
        expect(component.find(ListItem)).toHaveLength(0);
    });
});
