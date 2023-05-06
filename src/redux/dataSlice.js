import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoData: [],
    users: [],
    searchValue: "",
    user: {
        todoid: 'id',
        title: 'title',
        userId: 'userId',
        name: 'user.name',
        email: 'user.email',
    }
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            const { key, data } = action.payload;
            state[key] = data;
        }
    }
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
