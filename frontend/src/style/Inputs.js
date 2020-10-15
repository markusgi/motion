import styled from 'styled-components';

export const InputBase = styled.input`
height: 30px;
width: 200px;
background-color: white;
border: none;
background: none;
// background: ${props => props.password ? "red" : "white"};
`

export const InputPassword = styled(InputBase)`
    width: 340px;
    height: 52px;
    padding-left: 23px;
`

export const InputUsername = styled(InputBase)`
    width: 340px;
    height: 52px;
    padding-left: 23px;
    margin-top: 40px;

`

export const InputText = styled.input`
    width: 410px;
    min-height: 26px; 
    background: none;
    
`