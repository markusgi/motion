import styled from 'styled-components';

export const FooterBase = styled.div`
    width: 100vw;
`

export const LoginFoter = styled.div`
    width: 50%;
    height: 42px;
    background: none;
    padding-bottom: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center,
`

export const FooterPopup = styled(FooterBase)`
    display: flex;
    width: 100%;
`

export const PostFooter = styled(FooterBase)`
    width: 530px;
    height: 78px;
    display: flex;

    margin-left: 30px;

    section {
        width: 66px;

        display: flex;
        flex-direction: row;
        align-items: center;

        p {
            font-size: 14px;
            line-height: 16px;
            margin-left: 14px;
    
            color: #000000;
        }


    }

    
`   