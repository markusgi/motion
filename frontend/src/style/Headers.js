import styled from 'styled-components';

export const HeaderAll = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    // border-bottom: 1px solid gray;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`
export const HeaderLeft = styled.div` 
    display: flex;
    align-items: center;
    flex: 60%;
    height: 80px;

    h1 {
        font-size: 22px;
        font-weight: 400;
        padding-left: 12px;
    }

    p {
        display: flex;
        align-items: center;
        height: 100%;
    }


`
export const HeaderRight = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 20%;
    align-items: center;
`


export const SearchBar = styled.div`
    border-bottom: 1px solid #000000;
    min-height: 70px;
    width: 100vw;

    display: flex;
    align-items: center;
    background-color: #eeeeee;
    

    p {
        display: flex;
        align-items: center;
        background-color: #eeeeee;
        height: 80px;
    }

    // border-bottom: ${props => props.selected ? "10px solid blue" : "0"}
`

export const PostHeader = styled.div`
    height: 85px;
    width: 530px;
    display: flex;
    align-items: center;
    margin-left: 26px;

    section {
        margin-left: 14px;
        p {
            font-size: 14px;
            padding-bottom: 4px;
        }
    }

`