import {createGlobalStyle} from 'styled-components';
import theme from './theme';


const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => theme.colors.primary};
}

html{
    color: ${(props) => theme.colors.secondary}
}
`


export default GlobalStyles