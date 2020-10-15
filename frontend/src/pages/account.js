
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { userAction } from '../store/actions/userAction'

import { HomeWrapper } from '../style/Wrappers'
import { MainContainer, CloudContainer, AccountContainer, LeftDivision, UpperDivision, FooterDivision } from '../style/Containers'

import NavBar from '../components/navBar';
import Posts from '../components/posts.js';

import Clouds from '../assets/background/Imagecloud.png';
import { ButtonSignUp, ButtonLikes } from '../style/Buttons';
import {Icon} from '../style/Icons';

import me from '../assets/avatars/me.svg'
import unknown from '../assets/avatars/unknown.svg'


const Account = () => {
    const [ user, setUser ] = useState([]);
    const token = localStorage.token;
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(user)
    
    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(userAction());
            console.log("in da account fetch user data effect")
            console.log(data);
            setUser(data);
        }
        getData();
        console.log(user)
    }, []);

    
    useEffect(() => {
        if (!token) {
            history.push('/login')
        }
    }, [token]);


    return (
        <HomeWrapper>
            <NavBar />    
            <CloudContainer >
                <img src={Clouds} alt=""></img>
            </CloudContainer>   
            <AccountContainer>   
                <LeftDivision>
                    <Icon src={unknown} alt=""></Icon>
                    <p style={{fontSize: "24px", paddingTop: "12px", paddingBottom:"8px"}}>{user ? `${user.first_name} ` + `${user.last_name}` : "Anon"}</p>
                    <p style={{paddingBottom: "39px"}}>{user ? user.location : "Earth"}</p>
                    <ButtonSignUp>
                        <p>Edit Profile</p>
                    </ButtonSignUp>
                </LeftDivision>
                <UpperDivision>
                    <section style={{marginLeft: "50px", display: "flex", flexDirection: "column"}}>
                        <section style={{paddingTop: "30px", width: "400px", height: "65%"}}>
                            <p style={{fontSize: "14px"}}>About</p>
                            <p>{user.about_me ? user.about_me : "SOme random info"}</p>
                        </section>
                        <section style={{display: "flex", flexDirection: "row"}}>
                           <section style={{width: "220px", height: "30%"}}>
                                <p style={{fontSize: "14px"}}>Email</p>
                                <p>{user.email}</p>
                            </section>
                            <section style={{width: "180px", height: "30%"}}>
                                <p style={{fontSize: "14px"}}>Phone</p>
                                <p>{user.phone ? user.phone : "+41 696969696"}</p>
                            </section> 
                        </section>
                    </section>
                    <section style={{marginLeft: "8px", paddingTop: "30px", width: "320px", height: "100%"}}>
                        <p style={{fontSize: "14px"}}>Things I like</p>
                        <ButtonLikes>Redux</ButtonLikes>
                        {user.things_user_likes ?
                            user.things_user_likes.map(thing => {
                                return <ButtonLikes key={thing.id}>{thing}</ButtonLikes>
                            })
                            : <p>He likes nothing...</p>
                        }
                    </section>
                </UpperDivision>
                <FooterDivision>
                    <section>
                        <p style={{fontSize: "24px"}}>{user.amount_of_posts}</p>
                        <p>Posts</p>
                    </section>
                    <section>
                        <p style={{fontSize: "24px"}}>{user.amount_of_likes}</p>
                        <p style={{opacity: "0.5"}}>Likes</p>
                    </section>
                    <section>
                        <p style={{fontSize: "24px"}}>{user.amount_of_friends}</p>
                        <p style={{opacity: "0.5"}}>Friends</p>
                    </section>
                    <section>
                        <p style={{fontSize: "24px"}}>{user.amount_of_followers}</p>
                        <p style={{opacity: "0.5"}}>Followers</p>
                    </section>
                    <section>
                        <p style={{fontSize: "24px"}}>{user.amount_following}</p>
                        <p style={{opacity: "0.5"}}>Following</p>
                    </section>
                    
                </FooterDivision>
            </AccountContainer> 
            <MainContainer>  
                <Posts />
            </MainContainer>
        </HomeWrapper>
    );
};

export default Account;