import { createAction } from "@reduxjs/toolkit";

//USING CREATEACTION() == REDUX TOOLKIT WAY
export const actionOnStatus = createAction('UPDATE_STATUS')



//REDUX WAY
// const actionOnStatus = (status) => {
//     return {
//         type: 'UPDATE_STATUS',
//         payload: status
//     }
// }

// export default actionOnStatus


