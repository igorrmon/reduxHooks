const INITIAL_STATE = {
    data: ''
};

export default function email(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_EMAIL':
            return { data: action.text };
        default:
            return state;
    }
}
