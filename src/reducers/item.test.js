import { SET_RATE } from 'constants/actions';
import itemReducer from './item';

describe('itemReducer', () => {
    it('Should accept GET_LIST_RECIEVE correctly', () => {
        const item = { id: 3, rate: 2 }
        const defaultState = { [item.id]: item };
        const payload = { id: item.id, rate: 10 };

        const state = itemReducer(defaultState, { type: SET_RATE, payload })

        expect(state[item.id].rate).toEqual(payload.rate);
    });
});
