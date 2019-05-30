import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import StarIcon from '@material-ui/icons/Star';
import Rating from 'material-ui-rating'
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from './'

describe('ListItem', () => {
    const item = {
        id: 1,
        title: 'Title',
        image: 'src',
        description: 'description',
        rate: 4,
        onRateChange: jest.fn()
    };
    let component;

    it('Should render correctly', () => {
        component = mount(<ListItem { ...item } />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it('Should render correct title', () => {
        const title = component.find('h2').text();
        expect(title).toEqual(item.title);
    })

    it('Should render correct description', () => {
        const description = component.find('p').text();
        expect(description).toEqual(item.description);
    })

    it('Should render correct image', () => {
        const image = component.find(CardMedia).prop('image');
        expect(image).toEqual(item.image);
    })

    it('Should render correct rate', () => {
        const rate = component.find(Rating).prop('value');
        const newRate = 3

        expect(rate).toEqual(item.rate);
    })

    it('Should call callback on star click', () => {
        const newRate = 3;
        const star = component.find(Rating).find('button').at(newRate - 1);

        star.simulate('click');

        const call = item.onRateChange.mock.calls;

        expect(call.length).toEqual(1);
        expect(call[0][0]).toEqual(item.id);
        expect(call[0][1]).toEqual(newRate);
    })

})
