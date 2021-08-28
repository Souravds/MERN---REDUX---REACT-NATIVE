import { createReducer } from '@reduxjs/toolkit';
import { actionOnStatus } from '../actions';

const initialState = {
    name: 'sad',
    age: 25,
    status: 'coder'
  }

//REDUX-TOOLKIT WAY
export default createReducer(initialState, (builder) => {
    //UPDATE AGE
    builder.addCase('UPDATE_AGE',(state, action) => {
        state.age = action.payload
    })

    //UPDATE NAME
    builder.addCase('UPDATE_NAME', (state, action) => {
        state.name = action.payload
    })

    //UPDATE STATUS
    builder.addCase(actionOnStatus, (state, action) => {
        state.status = action.payload
    })
})


//REDUX WAY
// const userReducer = (state = initialState, action)  => {
//     if(action.type === 'CHANGE_NAME'){
//         return{
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }

// export default userReducer