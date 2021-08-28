import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionOnStatus } from '../actions';

function Profile() {
    //GRAB DATA FROM STORE BY useSelector
    const {name, age, status} = useSelector(state => state)

    //MODIFICATION INTO THE STORE BY useDispatch 
    const dispatch = useDispatch()
    
    //UPDATE AGE
    const updateAge = (age) => {
        dispatch({
            type: 'UPDATE_AGE',
            payload: age
        })
    }

    //UPDATE_NAME
    const updateName = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const results = await res.json()

        dispatch({
            type: 'UPDATE_NAME',
            payload: results[0].name
        })    
    }

    //UPDATE STATUS BY createAction
    const updateStatus = (status) => {
        dispatch(actionOnStatus(status))
    }
    return (
        <div>
            <h2> My name is { name }</h2>
            <h6>I am { age } years old</h6>
            <h6>And I am a { status }</h6>
            <button onClick={() => {
                updateAge(70); 
                updateName(); 
                updateStatus('gaming')
            }}>update</button>
        </div>
    )
}

export default Profile
