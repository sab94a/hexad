import { eventChannel } from 'redux-saga';
import Api from 'api';
import {
    takeEvery,
    takeLatest,
    put,
    call,
    take,
    select,
    fork
} from "@redux-saga/core/effects";
import { 
    INIT,
    GET_LIST,
    GET_LIST_REQUEST,
    GET_LIST_RECIEVE,
    START_LOADING_RATE,
    END_LOADING_RATE
} from 'constants/actions';
import { updateEntities, setRate } from 'actions';

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

const getRandomId = ids => ids[getRandomInt(0, ids.length)];

export const createLoop = (ids) => eventChannel(emitter => {
    let timoutId;

    const loop = () => {
        timoutId = setTimeout(() => {
            emitter({ id: getRandomId(ids), rate: getRandomInt(1, 10) });
            loop();
        }, getRandomInt(100, 10000));
    }

    loop();

    return () => clearTimeout(timoutId)
})

export function* waitLoadingRateEnd (chan) {
    yield take(END_LOADING_RATE)
    chan.close()
}

export function* startloadingRate () {
    const state = yield select();
    const chan = yield call(createLoop, state.list.items);
    
    yield fork(waitLoadingRateEnd, chan)

    while(true) {
        const payload = yield take(chan)
        yield put(setRate(payload))
    }
}

export function* getList() {
    yield put({ type: GET_LIST_REQUEST });
    const { result, entities } = yield call(Api.fetchList);

    yield put(updateEntities(entities));
    yield put({ type: GET_LIST_RECIEVE, payload: result });
}

export function* init () {
    yield put({ type: GET_LIST });
}

export default function* rootSaga() {
    yield takeEvery(INIT, init);
    yield takeEvery(GET_LIST, getList);
    yield takeLatest(START_LOADING_RATE, startloadingRate);
}