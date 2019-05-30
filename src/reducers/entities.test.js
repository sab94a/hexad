import { UPDATE_ENTITIES } from 'constants/actions';
import entitiesReducer from './entities';

describe('entitiesReducer', () => {
    it('Should accept UPDATE_ENTITIES correctly', () => {
        const defaultState = { a: { testA: 'testA' }, b: { testB: 'testB' } };
        const payload = { b: { testC: 'testC' } };

        const state = entitiesReducer(defaultState, { type: UPDATE_ENTITIES, payload })

        expect(state).toEqual({
            a: { testA: 'testA' },
            b: { testB: 'testB', testC: 'testC' }
        });
    });
});
