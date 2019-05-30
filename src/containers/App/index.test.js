import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import List from 'components/List';
import Switch from '@material-ui/core/Switch';
import { App } from './';

const list = {
    items: [{ id: 1, title: 'Title' }, { id: 2, title: 'Title' }],
    loading: false
}

const init = jest.fn()
const setRate = jest.fn()
const startLoadingRate = jest.fn()
const endLoadingRate = jest.fn()

describe('Root App', () => {
    let component;

    it('Should render correctly', () => {
        component = mount(<App 
            list={ list }
            onInit={ init }
            setRate={ setRate }
            startLoadingRate={ startLoadingRate }
            endLoadingRate={ endLoadingRate }
        />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it('Should call onInit callback on render', () => {
        expect(init.mock.calls.length).toBe(1);
    });

    it('Change Rate props should be passed correctly', () => {
        const listComponentHandler = component.find(List).prop('onItemRateChange')
        const id = 1;
        const rate = 3;

        listComponentHandler(id, rate);

        expect(setRate.mock.calls.length).toEqual(1);
        expect(setRate.mock.calls[0][0]).toEqual(id)
        expect(setRate.mock.calls[0][1]).toEqual(rate)
    });

    it('Switch should toggle startLoadingRate/endLoadingRate', () => {
        const checkbox = component.find(Switch).find('input[type="checkbox"]');
        const createCheckboxEvent = checked => ( { target: { checked } } );

        checkbox.simulate('change', createCheckboxEvent(true));

        expect(startLoadingRate.mock.calls.length).toEqual(1)
        expect(endLoadingRate.mock.calls.length).toEqual(0)

        checkbox.simulate('change', createCheckboxEvent(false));

        expect(endLoadingRate.mock.calls.length).toEqual(1)
    });
});
