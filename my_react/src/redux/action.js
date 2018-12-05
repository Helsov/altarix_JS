export function listMessage(messages){
    return {
        type: 'LIST_MESSAGE',
        payload: messages
    }
}

export function addMessage(text){
    return {
        type: 'ADD_MESSAGE',
        payload: text
    }
}
