import styled from 'styled-components';
// import bImage from '../assets/images/background_image.png'

export const LoginContainer = styled.div`
    height: 100vh;
    flex: 0.6;
    // width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    flex-flow: column;
`

export const LogInFormContainer = styled.form`
    height: 70vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        min-width: 340px;
        height: 464px;
        section {
            width: 100%;
            border-bottom: 1px solid gray;
        }
    }
`
export const LogoContainer = styled.div`
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex: 0.4;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    section {
        padding-bottom: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40vh;
        background: none;
        width: 270px;
        img {
            background: none;
            height: 80px;
            width: 80px;
        }

        p {
            background: none;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            
            /* or 150% */
            text-align: center;
            
            color: #FFFFFF;
            
            mix-blend-mode: normal;
            opacity: 0.6;
        }
    }

    p {
        background: none;
        font-size: 12px;
        line-height: 14px;

        /* identical to box height */
        text-align: center;

        color: #FFFFFF;
    }
`

export const Stores = styled.div`
    width: 280px;
    height: 42px;
    padding-top: 40px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignIn = styled.div`
    background-color: green;
`

export const HeaderContainer = styled.div`
    display: flex;
    width: 60vw;
    justify-content: flex-end;

    align-items: center;
    height: 80px;
    margin-bottom: 100px;
    
    p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;

        color: #000000;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100%;
    background-color: #eeeeee;

`

export const PostContainer = styled.div`
    padding-top: 40px;
    margin-bottom: 32px;
    margin-right: 32px;
    min-height: 231px;

    display: flex;
    flex-direction: column;
    width: 560px;

    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;


`

export const ContentPost = styled.div`
    // border: 3px solid blue;
    display: flex;
    flex-flow: wrap;
    min-height: 900px;
    justify-content: center;
    background-color: #eeeeee;

    margin-top: 40.5px;
    margin-left: 144px;
    margin-right: 144px;

    width: 100%;
    height: 100vh;
    // min-width: 80%;
`
export const WhatsOnMindContainer = styled.div`
    width: 560px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    margin-right: 32px;
    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);

`

export const WhatsOnMindText = styled.div`
    display: flex;
    
    align-items: center;
    
    p {
        opacity: 0.5;
        margin-left: 24px;
        margin-right: 132px;
    }
 
`

export const PopWindow = styled(WhatsOnMindContainer)`
    
    width: 560px;
    min-height: 320px;
    z-index: 2;

    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    section {
        margin-left: 10px;
    }

`

export const CloudContainer = styled.div`
    // width: 100vh;
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;

    img {
        display: flex;
        width: 100vw;
        height: 200px;
    }
`

export const PostContentImages = styled.div`
    width: 530px;
    margin-left: 30px; 
    padding-bottom: 10px;
`


export const AccountContainer = styled.div`
    height: 400px;
    width: 1152px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`
export const LeftDivision = styled.div`
    height: 100%;
    width: 310px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid gray;
    align-items: center;
    justify-content: center;
`
export const UpperDivision = styled.div`
    height: 264px;
    width: 831px;
    display: flex;
    section {
        p {
            padding-bottom: 7px;
        }
    }

`
export const FooterDivision = styled.div`
    height: 135px;
    width: 831px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid gray;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 55px;
        margin-right: 55px;
        p {
            padding-bottom: 3px;
        }
    }
`

export const Options = styled.div`
    position: fixed;
    top: 80px;
    left: 82vw;
    z-index: 2;

    width: 180px;
    height: 96px;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    border-radius: 4px;

    p {
        font-size: 14px;
    }
    section {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`