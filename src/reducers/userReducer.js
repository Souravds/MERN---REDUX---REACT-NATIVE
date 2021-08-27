import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    name: 'sad',
    age: 25,
    status: 'coder'
  }

//REDUX-TOOLKIT WAY
export default createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_AGE',(state, action) => {
        state.age = action.payload
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