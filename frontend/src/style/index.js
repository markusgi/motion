import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
    * {
        margin: 0;
        padding: 0;
        font-size: 16px;
        box-sizig: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 400; 
        background-color: white;
    }
`

export const defaultTheme = {
    primaryColor: '#c468ff',
    linearGradient: "linear-gradient(102deg, #c468ff, #6e91f6)",

    // sizes:
    paddingSmall: "2px",
    paddingMedium: "4px"
}