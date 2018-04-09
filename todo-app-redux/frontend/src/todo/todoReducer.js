const INITIAL_STATE = { description: '', list: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CHANGE_DESCRIPTION': debugger;
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED': debugger;
            return { ...state, list: action.payload.data }
        case 'TODO_ADDED': debugger;
            return { ...state, description: '' }
        default: debugger;
            return state;
    }
}