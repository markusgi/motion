import React, { useState } from 'react';

import { ButtonSignIn } from '../style/Buttons'
import { InputUsername, InputPassword } from '../style/Inputs.js'
import { TitleSignIn } from '../style/Titles.js';

import usernameIcon from '../assets/icons/usernameIcon.svg';
import passwordIcon from '../assets/icons/passwordIcon.svg';

export const CreateAccount = () => {
    const [ email, setEmail ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ email }),
        };
        console.log(config)
        //then do the fetch
    }

    return (
        <div>
            <TitleSignIn>Sign Up</TitleSignIn>
            <section>
                <img src={usernameIcon} alt=""></img>
                <InputUsername type="text" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </section>
   
            <ButtonSignIn onClick={handleSubmit}>Continue</ButtonSignIn>
        </div>
    )
}