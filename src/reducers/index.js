import { combineReducers } from 'redux';
import list from './list';
import entities from './entities';

const reducer = combineReducers({
    list,
    entities
});

export default reducer
