import { combineReducers } from 'redux';
import { UPDATE_ENTITIES } from 'constants/actions'
import itemReducer from './item';

const commonReducer = combineReducers({
    item: itemReducer
})

const entitiesReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch(type) {
        case UPDATE_ENTITIES:
            let newState = { ...state };

            for(let entity in payload) {
                newState = {
                    ...newState,
                    [entity]: {
                        ...state[entity],
                        ...payload[entity]
                    }
                }
            }

            return newState;
        default:
            return commonReducer(state, action);
    }
}

export default entitiesReducer;
