import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { PostContainer, PostContentImages, ContentPost, WhatsOnMindContainer, WhatsOnMindText } from '../style/Containers';
import { Icon } from '../style/Icons'
import me from '../assets/avatars/me.svg'
import {ButtonPost, CloseButton} from '../style/Buttons'
import { PostFooter } from '../style/Footers'
import { PostHeader } from '../style/Headers'

import heart from '../assets/icons/heart.svg'
import share from '../assets/icons/share.svg'

import NewPostModal from './newPostModal'

import { feedAction } from '../store/actions/feedAction';
import {userAction} from "../store/actions/userAction";


const Posts = () => {
    const [ user, setUser ] = useState([]);
    const [ showNewPost, setShowNewPost] = useState(false);
    const [ post, setPosts ] = useState([]);
    const dispatch = useDispatch();
    console.log(post)



    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(userAction());
            console.log("in da fetch user data effect")
            console.log(data);
            setUser();
        }
        getData();
    }, [user]);


    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(feedAction())
            console.log(data)
            setPosts(data)
        }
        getData();
    }, []);



    return (
        <ContentPost>
            {showNewPost ? 
            <NewPostModal />
            : null}
            {showNewPost ? 
            <CloseButton onClick={() => setShowNewPost(!showNewPost)} >X</CloseButton>
            :
            <WhatsOnMindContainer>
                <WhatsOnMindText>
                    <Icon src={me}/>
                    <p>What's on your mind, Markus?</p>
                    <ButtonPost onClick={() => setShowNewPost(!showNewPost)} >
                        
                    </ButtonPost>
                </WhatsOnMindText>
            </WhatsOnMindContainer>
            }

            {post ? post.map((sel) => {
                return (
                    <PostContainer key={sel.id} >
                        <PostHeader>
                            <Icon src={me} alt=""></Icon>
                            <section>
                                <p>{sel.author}</p>
                                <p style={{opacity: "0.5"}}>{sel.created}</p>
                            </section>
                        </PostHeader>
                        <PostContentImages>
                            <p>{sel.text_content}</p>

                        </PostContentImages>
                        
                        <PostFooter>
                            <section>
                                <img src={heart} alt=""></img>
                                <p>Like</p>
                            </section>
                            <section>
                                <img src={share} alt="" style={{marginLeft: "41px"}} ></img>
                                <p>Share</p>
                            </section>
                            <section style={{marginLeft: "278px", opacity: "0.5"}}>
                                <p>{sel.likes_counter} Likes</p>
                            </section>
                        </PostFooter>
                    </PostContainer>
                    ) 
            }) : "Loading"}
        </ContentPost>
    )
}

export default Posts;