import React from 'react';
import { useSelector } from 'react-redux';


function Profile() {
    const {name, age, status} = useSelector(state => state)

    return (
        <div>
            <h2> My name is { name }</h2>
            <h6>I am { age } years old</h6>
            <h6>And I am a { status }</h6>
        </div>
    )
}

export default Profile
