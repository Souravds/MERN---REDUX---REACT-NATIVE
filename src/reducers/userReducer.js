import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'sad',
    age: 25,
    status: 'coder'
  }

//creteSclice minimized the reducer and action in a file
const userSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        updateName(state,action){
            state.name = action.payload
        },

        updateAge(state, action){
            state.age = action.payload
        },

        updateStatus(state, action){
            state.status = action.payload
        }
    }
})

export const { updateName, updateAge, updateStatus } = userSlice.actions

export default userSlice.reducer