import { GET_LIST_REQUEST, GET_LIST_RECIEVE } from 'constants/actions';
import listReducer, { defaultState } from './list';

describe('listReducer', () => {
    it('Should return correct default state', () => {
        const state = listReducer(undefined, {})
        expect(state).toEqual(defaultState)
    });

    it('Should accept GET_LIST_REQUEST correctly', () => {
        const state = listReducer(defaultState, { type: GET_LIST_REQUEST })
        expect(state.loading).toBe(true)
    });

    it('Should accept GET_LIST_RECIEVE correctly', () => {
        const list = [1, 2];
        const state = listReducer(defaultState, { type: GET_LIST_RECIEVE, payload: list })

        expect(state.loading).toBe(false)
        expect(state.items).toEqual(list)
    });
});
