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
    font-size: 15px;
    line-height: 1.8;
    font-weight: 400;
    font-family: "Bookman Old Style";
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
    input{
        border: 1px solid #ced4da;
        font-weight: 400;
        line-height: 1.5;
        padding: 0.375rem 0.75rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    }
    textarea{
        border:none;
        border: 1px solid #ced4da;
    }
    a{
        text-decoration: none;
    }
    ul{
        li{
            list-style: none;
        }
    }

`;

export default GlobalStyle;
