import { UPDATE_ENTITIES } from 'constants/actions'

const entitiesReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case UPDATE_ENTITIES:
            const { entity, entities } = payload;
            return {
                ...state,
                [entity]: {
                    ...state[entity],
                    ...entities
                }
            };
        default:
            return state;
    }
}

export default entitiesReducer;
