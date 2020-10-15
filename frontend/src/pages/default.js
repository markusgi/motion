import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Default = () => {

    const token = useSelector((state) => state.token);
    const history = useHistory();

    useEffect(() => {
        console.log("in da default use effect ------ ", token)
        console.log("redirecting")
        if (token) {
            history.push('/home')
        }
        else {
            history.push('/login')
        }
    })

    return (
        <div>
            <p>in da default</p>
        </div>
    )
}

export default Default;