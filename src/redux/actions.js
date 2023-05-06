import axios from 'axios';
import { setData } from './dataSlice';

export const fetchData = () => {
    return async dispatch => {
        try {
            const todoData = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch(setData({ key: 'todoData', data: todoData.data }));

            const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users/');
            dispatch(setData({ key: 'users', data: usersResponse.data }));
        } catch (error) {
            console.log(error);
        }
    }
}
