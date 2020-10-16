import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { HomeWrapper } from '../style/Wrappers'
import { MainContainer } from '../style/Containers'
import { SearchBar } from '../style/Headers'

import search from '../assets/icons/search.svg'
import NavBar from '../components/navBar';
import Posts from '../components/posts.js';

const Home = () => {
    const token = localStorage.token;
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!token) {
            history.push('/login')
        }
        console.log("in da home use effect ---------")
        console.log(localStorage)
    }, [token]);

    //fetch user data


    return (
        <HomeWrapper>
            <NavBar />        
            <MainContainer>
                <SearchBar>
                    <img src={search} alt="" style={{height: "30px", width: "30px", backgroundColor: "#eeeeee", paddingLeft: "144px"}}></img>
                    <p style={{textAlign: "center", width: "115px", height: "22px", marginLeft: "21px", paddingRight: "771px", opacity: "0.5"}}>Search Posts...</p>
                    <p style={{borderBottom: "2px solid #000000"}}>Liked</p>
                    <p style={{paddingLeft: "42px", opacity: "0.5"}}>Friends</p>
                    <p style={{paddingLeft: "42px", opacity: "0.5"}}>Follow</p>
                </SearchBar>
                <Posts />
            </MainContainer>
        </HomeWrapper>
    );
};

export default Home;