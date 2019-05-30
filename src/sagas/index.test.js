import { takeEvery, all, put, call } from "@redux-saga/core/effects";
import { 
    INIT,
    GET_LIST,
    GET_LIST_REQUEST,
    GET_LIST_RECIEVE,
    UPDATE_ENTITIES
} from 'constants/actions';
import { updateEntities } from 'actions';
import Api from 'api';
import rootSaga, { getList, init } from './';


const list = [1];
const entities = {
    1: {
        id: 1,
        title: 'title'
    }
};

describe('Sagas', () => {
    describe('Root', () => {
        const saga = rootSaga();

        it('Add INIT listener', () => {
            expect(saga.next().value).toEqual(takeEvery(INIT, init))
        });

        it('Add GET_LIST listener', () => {
            expect(saga.next().value).toEqual(takeEvery(GET_LIST, getList))
        });
    });

    describe('Init', () => {
        const saga = init();

        it('Put GET_LIST action', () => {
            expect(saga.next().value).toEqual(put({ type: GET_LIST }))
        });
    });

    describe('getList', () => {
        const saga = getList();

        it('should start request', () => {
            expect(saga.next().value).toEqual(put({ type: GET_LIST_REQUEST }))
        });

        it('should call api', () => {
            expect(saga.next().value).toEqual(call(Api.fetchList));
        });

        it('should update entities', () => {
            expect(saga.next({ result: list, entities }).value).toEqual(put(updateEntities(entities)))
        });

        it('should recieve items', () => {
            expect(saga.next().value).toEqual(put({ type: GET_LIST_RECIEVE, payload: list }))
        });
    });
});