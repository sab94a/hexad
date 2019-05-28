import { GET_LIST_REQUEST, GET_LIST_RECIEVE } from 'constants/actions';

const defaultState = {
    items: [],
    loading: false
};

const listReducer = (state = defaultState, { type, payload }) => {
    switch(type) {
        case GET_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_LIST_RECIEVE:
            return {
                ...state,
                loading: false,
                items: payload
            }
        default:
            return state;
    }
}

export default listReducer;
