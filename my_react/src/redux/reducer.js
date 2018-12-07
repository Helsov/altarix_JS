import {GET_MESSAGE, SET_MESSAGES} from './action';

export function reducer (state, action) {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                messages: action.payload
            };
        case SET_MESSAGES:
            return {
                ...state,
                newMessage: action.payload
            }
        default:
            return state;
    }
};

export const initialState = {
    messages: [],
    name: 'testName'
};