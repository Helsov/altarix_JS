export const GET_MESSAGE = 'GET_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export function getMessages(messages){
    return {
        type: GET_MESSAGE,
        payload: messages
    }
}

export function setMessages(text){
    return {
        type: SET_MESSAGES,
        payload: text
    }
}
