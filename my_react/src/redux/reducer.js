export function reducer (state, action) {
    switch (action.type) {
        case 'LIST_MESSAGE':
            return Object.assign({},
                state, {
                    messages: action.payload
                });
        case 'ADD_MESSAGE':
            return Object.assign({},
                state, {
                    text: action.payload
                })
        default:
            return state;
    }
};