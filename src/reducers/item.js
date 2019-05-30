import { SET_RATE } from 'constants/actions';

const itemReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case SET_RATE:
            const { id, rate } = payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    rate
                }
            };
        default:
            return state;
    };
};

export default itemReducer;
