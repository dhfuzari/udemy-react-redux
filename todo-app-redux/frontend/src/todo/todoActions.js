import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (e) => ({
    type: 'CHANGE_DESCRIPTION',
    payload: e.target.value
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}