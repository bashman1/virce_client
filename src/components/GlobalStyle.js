import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: #ffff;
   font-family: "Poppins", Arial, sans-serif;
    font-size: 15px;
    line-height: 1.8;
    font-weight: 400;
    color: gray;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h1{
        line-height: 1.5;
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        line-height: 1.5;
    }
    h3{
        line-height: 1.5;
        font-weight: 400;
        color: #000000;    
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
        text-decoration: none;
        background-color: transparent;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
