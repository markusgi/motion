import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';

import favicon from '../assets/images/favicon.png'
import postsIcon from '../assets/icons/postsIcon.svg'
import findFriends from '../assets/icons/findFriends.svg'
import NotificationBell from '../assets/icons/notifications.svg'
import me from '../assets/avatars/me.svg';
import options from '../assets/icons/options.svg'
import profile from '../assets/icons/profile.svg'
import logout from '../assets/icons/logout.svg'

import { Icon } from '../style/Icons';
import { ButtonBase, OptionsButton } from '../style/Buttons'
import { Options } from '../style/Containers'
import { HeaderAll, HeaderLeft, HeaderRight } from '../style/Headers'


const NavBar = () => {
    const [ showOptions, setShowOptions] = useState(false);
    console.log(showOptions)
    const history = useHistory();

    return (
        <HeaderAll>
            <HeaderLeft>
                <img src={favicon} style={{width: "26px", height: "26px", marginLeft: "40px"}} alt=""></img>
                <h1>Motion</h1>
                <img src={postsIcon} style={{width: "18px", height: "18px", marginLeft: "113px" }} alt="" ></img>
                <p style={{marginLeft: "19px", borderBottom: "2px solid #AD73FD"}} >Posts</p>
                <img src={findFriends} style={{width: "22px", height: "14px", marginLeft: "73px" }} alt=""></img>
                <p style={{marginLeft: "17px"}}>Find Friends</p>
            </HeaderLeft>
            <HeaderRight>
                <img src={NotificationBell} style={{width: "42px", height: "33px", marginRight: "37px" }} alt=""></img>
                <Icon src={me} style={{marginRight: "12px"}} />

                <OptionsButton onClick={() => setShowOptions(!showOptions)} >
                    <img src={options} style={{marginRight: "40px"}} alt="" />
                </OptionsButton>
    
            </HeaderRight>  
            {showOptions ? 
            <Options>
                <section style={{background: "#eeeeee"}}>
                    <OptionsButton onClick={()=> history.push("/account")} style={{display: "flex"}} >
                        <img src={profile} alt="" style={{opacity: "0.5", marginLeft: "20px", paddingRight: "16px"}}></img>
                        Profile
                    </OptionsButton>
                </section>
                <section>
                   <OptionsButton onClick={()=> history.push("/login")} style={{display: "flex"}} >
                        <img src={logout} alt="" style={{marginLeft: "20px", paddingRight: "16px"}} ></img>
                        Logout
                    </OptionsButton> 
                </section>
            </Options>
            : null
            }        
            

        </HeaderAll>
    )
}

export default NavBar;