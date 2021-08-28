import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionOnStatus } from '../actions';

function Profile() {
    //GRAB DATA FROM STORE BY useSelector
    const {name, age, status} = useSelector(state => state)

    //MODIFICATION INTO THE STORE BY useDispatch 
    const dispatch = useDispatch()

    const updateAge = (age) => {
        dispatch({
            type: 'UPDATE_AGE',
            payload: age
        })
    }

    //UPDATE_NAME
    const [inputname, setinputname] = useState('')
    const updateName = (inputname) => {
        dispatch({
            type: 'UPDATE_NAME',
            payload: inputname
        })    
    }

    //UPDATE STATUS BY CREATE_ACTION
    const updateStatus = (status) => {
        dispatch(actionOnStatus(status))
    }
    return (
        <div>
            <input type="text" value={inputname} placeholder='Enter name...' onChange={(e) => setinputname(e.target.value)} />
            <h2> My name is { name }</h2>
            <h6>I am { age } years old</h6>
            <h6>And I am a { status }</h6>
            <button onClick={() => {
                updateAge(70); 
                updateName(inputname); 
                updateStatus('gaming')
            }}>update</button>
        </div>
    )
}

export default Profile
