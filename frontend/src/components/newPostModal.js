import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { PopWindow } from '../style/Containers'
import { ButtonPost } from '../style/Buttons'
import { InputText } from '../style/Inputs'
import { FooterPopup } from '../style/Footers'
import {Icon} from '../style/Icons';
import Unknown from '../assets/avatars/unknown.svg'
import paperPlane from '../assets/icons/paperPlane.svg'
import postImage from '../assets/icons/postImage.svg'

import { postAction } from '../store/actions/postAction.js'


const NewPostModal = () => {
    const [ content, setContent ] = useState();
    const dispatch = useDispatch();
    console.log(content)

    const submitPost = () => {
        const getData = async () => {
            console.log("before da fetch------", content)
            const data = await dispatch(postAction(content))
            console.log("in da submit post .--------" , data);
        }
        getData();
    };

    return (
        <PopWindow >
            <section>
                <Icon src={Unknown} style={{height: "60px", width: "60px"}} />
                <InputText type="text" onChange={(event) => setContent(event.target.value)} placeholder="say something!" /> 
            </section>
            <FooterPopup>
                <section>
                    {/* <input type="img">
                        <img src={postImage} alt=""></img>
                    </input> 
                    <input type="file"/>*/}
                </section>
                <ButtonPost onClick={submitPost} >
                    <img style={{color: "white", zIndex: "4", backgroundColor: "white"}} alt="" src={{paperPlane}}></img>
                </ButtonPost>
            </FooterPopup>
        </PopWindow>

    )

}

export default NewPostModal;