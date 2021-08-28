import { createAction } from "@reduxjs/toolkit";

//USING CREATEACTION() == REDUX TOOLKIT WAY
export const actionOnStatus = createAction('UPDATE_STATUS')

//FETCHING DATA FROM API CREATE A ACTION CREATOR
export const fetchName = () => {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const results = await res.json()

        dispatch({
            type: 'UPDATE_NAME',
            payload: results[0].name
        })    
    }
}

//REDUX WAY
// const actionOnStatus = (status) => {
//     return {
//         type: 'UPDATE_STATUS',
//         payload: status
//     }
// }

// export default actionOnStatus


