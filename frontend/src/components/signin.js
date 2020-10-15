import React, { useState } from 'react';
// import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { authAction } from '../store/actionTypes/authAction';

import { ButtonSignIn } from '../style/Buttons'
import { InputUsername, InputPassword } from '../style/Inputs.js'
import { TitleSignIn } from '../style/Titles.js';

import usernameIcon from '../assets/icons/usernameIcon.svg';
import passwordIcon from '../assets/icons/passwordIcon.svg';


export const SignIn = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ email, password}),
        };
        console.log(config)
        //then do the fetch
        fetch("https://motion.propulsion-home.ch/backend/api/auth/token/", config)
            .then((Response) => Response.json())
            .then((data) => {
                dispatch(authAction(data.access));
                localStorage.setItem("token", data.access)
            })
    }

    return (
        <div>
            <TitleSignIn>Sign In</TitleSignIn>
            <section>
                <img src={usernameIcon} alt=""></img>
                <InputUsername type="text" onChange={(event) => setEmail(event.target.value)} placeholder="Username" />
            </section>
            <section>
                <img src={passwordIcon} alt=""></img>
                <InputPassword type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            </section>
            <ButtonSignIn onClick={handleSubmit}>SIGN IN</ButtonSignIn>
        </div>
    )
}