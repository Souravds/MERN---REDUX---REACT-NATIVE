import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateAge, updateStatus } from '../reducers/userReducer';

function Profile() {
    //GRAB DATA FROM STORE BY useSelector
    const {name, age, status} = useSelector(state => state)

    //DISPATCH FROM USER DATA MODIFICATION
    const dispatch = useDispatch()

    //UPDATE_NAME
    const updateReqName = () => {
        //CALL THE 'fetchUsers' extraReducers
        dispatch(fetchUsers())     
    }
    
    //UPDATE AGE
    const updateReqAge = (age) => {
        dispatch(updateAge(age))
    }

    //UPDATE STATUS
    const updateReqStatus = (status) => {
        dispatch(updateStatus(status))
    }
    return (
        <div>
            <h2> My name is { name }</h2>
            <h6>I am { age } years old</h6>
            <h6>And I am a { status }</h6>
            <button onClick={() => {
                updateReqName(); 
                updateReqAge(70); 
                updateReqStatus('gaming')
            }}>update</button>
        </div>
    )
}

export default Profile
