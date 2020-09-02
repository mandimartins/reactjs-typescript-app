import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing:border-box;
 }
 html{
   font-size: 62.5%;
   font-family: 'Roboto', sans-serif;
 }
 body{
   background-color: ${(props) => props.theme.colors.primary}
 }
`;

export default GlobalStyle;
