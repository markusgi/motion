import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LoginContainer, Stores, LogInFormContainer, LogoContainer, HeaderContainer } from '../style/Containers.js'
import { MainWrapper } from '../style/Wrappers.js'
import { ButtonSignUp, ButtonStore } from '../style/Buttons.js'
import { MotionLogin } from '../style/Titles.js'
import { LoginFoter } from '../style/Footers';

import appStore from '../assets/icons/appStore.svg'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import logo from '../assets/images/logo.png'
import backgroundImage from '../assets/background/background_image.png'
import {SignIn} from '../components/signin.js'
import { CreateAccount } from '../components/createAccount.js'

const Login = () => {
    const [ sign, setSign ] = useState(true); 

    const token = useSelector((state) => state.token);
    const history = useHistory();

    useEffect(() => {
        if (token) {
            history.push('/home')
        }
    }, [token]);

    
    return (
        <MainWrapper>
            <LogoContainer style={{backgroundImage: `url(${backgroundImage}), linear-gradient(102deg, #c468ff, #6e91f6)`}} >
                <section>
                    <img src={logo} alt="" />
                    <MotionLogin style={{paddingTop: "15px"}}>Motion</MotionLogin>
                    <p style={{paddingTop: "20px"}}>Connect with friends and the world around you with Motion.</p>
                    <Stores>
                        <ButtonStore>
                            <img src={appStore} style={{height: "17px", width: "79px"}} alt=""></img>
                        </ButtonStore>
                        <ButtonStore style={{marginLeft: "16px"}}>
                            <p>Hello</p>
                        </ButtonStore>
                    </Stores>
                    
                    
                </section>
                <LoginFoter>
                    <img src={twitter} style={{background: "none", opacity: 0.6, marginRight: "16px"}} alt=""></img>
                    <img src={facebook} style={{background: "none", opacity: 0.6, marginRight: "16px"}} alt=""></img>
                    <img src={instagram} style={{background: "none", opacity: 0.6}} alt=""></img>

                </LoginFoter>    
                <p style={{paddingBottom: "40px"}}>© Motion 2018. All rights reserved. </p>

            </LogoContainer>

            <LoginContainer>
                <HeaderContainer>
                    {sign ? <p>Don't have an account?</p> : <p>Already have an account?</p> }
                    <ButtonSignUp onClick={() => setSign(!sign)} >
                        {sign ?
                        <p>SIGN UP</p>
                        : <p>SIGN IN</p>
                        }</ButtonSignUp>
                </HeaderContainer>
                <LogInFormContainer>
                    {sign 
                    ? <SignIn /> 
                    : <CreateAccount />
                    }
                </LogInFormContainer>
            </LoginContainer> 
        </MainWrapper>
    );
};

export default Login;