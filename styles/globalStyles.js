import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: ${(props) => props.theme.colors.primary};
}

html{
    color: ${(props) => props.theme.colors.secondary};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
`


export default GlobalStyles