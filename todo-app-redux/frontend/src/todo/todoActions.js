import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (e) => {
    debugger;
    return {
        type: 'CHANGE_DESCRIPTION',
        payload: e.target.value
    };
}

export const search = () => {
    debugger;
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

// redux-thunk to return a method instead of an object
export const add = (description) => {
    debugger;
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search())
        );
    }
}