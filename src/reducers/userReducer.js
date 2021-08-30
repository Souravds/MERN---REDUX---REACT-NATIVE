import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'sad',
    age: 25,
    status: 'coder'
  }

  //USING createAsyncThunk ASYNC OPERTION
export const fetchUsers = createAsyncThunk(
    //ANY NAME CAN BE PROVIDED
    'fetch User',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersInfos = await res.json()
        //REQUEST RANDOM USERS ID NAME
        return usersInfos[Math.floor(Math.random() * 10)].name
    }
)

//creteSclice minimized the reducer and action in a file
const userSlice = createSlice({
    //ANY SCLICE NAME CAN BE PLACED
    name: 'person',
    //MAIN STATE PROVIDED
    initialState,
    //PERSON  SCLICE PROVIDES THESE ACTIONS
    reducers: {
        //HERE updateName ACT AS REDUCER FUNCTION AND ACTION TYPE ALSO
        updateName(state,action){
            state.name = action.payload
        },

        //SAME AS ABOVE
        updateAge(state, action){
            state.age = action.payload
        },

        //SAME AS ABOVE
        updateStatus(state, action){
            state.status = action.payload
        }
    },


    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed

        //ACTION.TYPES = 'fetchUsers/fulfilled'
        [fetchUsers.fulfilled]: (state, action) => {
            state.name = action.payload
        },

        //ACTION.TYPES = 'fetchUsers/pending'
        [fetchUsers.pending]: (state, action) => {
            state.name = 'Loading...'
        },

        //ACTION.TYPES = 'fetchUsers/rejected'
        [fetchUsers.rejected]: (state, action) => {
            state.name = 'Try Again Please...'
        }
    }
})

export const { updateName, updateAge, updateStatus } = userSlice.actions

export default userSlice.reducer