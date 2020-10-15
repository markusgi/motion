import styled from 'styled-components';

export const ButtonBase = styled.button`
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: none;
`

export const ButtonSignIn = styled(ButtonBase)`
    width: 280px;
    height: 60px;

    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    /* identical to box height */
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #FFFFFF;

    margin-top: 167px;
`

export const ButtonSignUp = styled(ButtonBase)`
    width: 120px;
    height: 40px;

    mix-blend-mode: normal;
    opacity: 0.2;
    border: 1px solid #000000;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 40px;
    margin-left: 18px;

    p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;

        /* identical to box height */
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;

        color: #000000;
    }

    // background: ${props => props.password ? "red" : "white"};
`

export const ButtonStore = styled(ButtonBase)`
    width: 124px;
    height: 40px;
    mix-blend-mode: normal;
    
    border: 1px solid #FFFFFF;
    border-radius: 100px;
    background: none;
    // border-opacity: 0.2;
`

export const ButtonPost = styled(ButtonBase)`
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    width: 60px;
    height: 60px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    // marin: 0;
    // padding: 0;
    // animation-name: none;

`

export const CloseButton = styled(ButtonBase)`
    height: 14px;
    width: 14px;
    position: absolute;
    z-index: 11;
    left: 713px;
    top: 183px;
    color: white;
    border: none;
`

export const OptionsButton = styled(ButtonBase)`
    border: none;
    margin-right: 5%;

`

export const ButtonLikes = styled(ButtonBase)`
    mix-blend-mode: normal;
    border: none;
    border-radius: 18px;
    width: 83px;
    height: 32px;
    background: #eeeeee;
    margin: 3px 3px 3px 3px;
    
`