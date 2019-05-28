import { takeEvery, put, call } from "@redux-saga/core/effects";
import Api from 'api';
import { 
    INIT,
    GET_LIST,
    GET_LIST_REQUEST,
    GET_LIST_RECIEVE
} from 'constants/actions';
import { updateEntities } from 'actions';

export function* getList() {
    yield put({ type: GET_LIST_REQUEST });
    const { list, entities, entity } = yield call(Api.fetchList);

    yield put(updateEntities({ entity,  entities }));
    yield put({ type: GET_LIST_RECIEVE, payload: list });
}

export function* init (){
    yield put({ type: GET_LIST });
}

export default function* rootSaga() {
    yield takeEvery(INIT, init);
    yield takeEvery(GET_LIST, getList);
}