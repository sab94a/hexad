import { init, updateEntities, setRate, startLoadingRate, endLoadingRate } from './';
import {
    INIT,
    UPDATE_ENTITIES,
    SET_RATE,
    START_LOADING_RATE,
    END_LOADING_RATE
} from 'constants/actions'; 

describe('Actions', () => {
    it('Init has correct type', () => {
        const { type } = init();

        expect(type).toEqual(INIT);
    });

    it('updateEntities has correct type and payload', () => {
        const entity = 'item';
        const entities = {};
        const { payload, type } = updateEntities({ entity, entities });

        expect(type).toEqual(UPDATE_ENTITIES);
        expect(payload.entity).toEqual(entity);
        expect(payload.entities).toEqual(entities);
    });

    it('setRate has correct type and payload', () => {
        const data = { rate: 1, id: 2 };
        const { payload, type } = setRate(data);

        expect(type).toEqual(SET_RATE);
        expect(payload.id).toEqual(data.id);
        expect(payload.rate).toEqual(data.rate)
    });

    it('startLoadingRate has correct type', () => {
        const { type } = startLoadingRate()
        expect(type).toEqual(START_LOADING_RATE)
    });

    it('endLoadingRate has correct type', () => {
        const { type } = endLoadingRate()
        expect(type).toEqual(END_LOADING_RATE)
    });
})
