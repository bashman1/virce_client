import { createGlobalStyle } from "styled-components";

const primaryColor = "85.4, 42.6%, 47.8%";
const textColor = "hsl(210, 14%, 83%)";
const secondaryColor = "hsl(10.1, 97.5%, 15.5%)";

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
    text-align: justify;

    .App{
        position: relative;

        .chat_guy{
            position: fixed;
            right: -2%;
            top: 90%;
            transform: translate(-100%, -1%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 5rem;
            z-index: 999;
            background:white;
            border-radius: 50%;
            border: 1px solid red;

            img{
                width: 40%;
                height: 40%;
                object-fit: cover;
            }
        }
    }
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #530f02;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

        &:hover{
            background-color: #530f02;
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
        color:#530f02;
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

    .bold{
        font-weight: bold !important;
        color: hsl(${primaryColor}) !important;
    }
    .error_msg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${primaryColor};
        color: ${textColor};

    }
    .text_center{
        text-align: center !important;
    }

    /* --------------------------------------- Width styles ------------- */
    .w_70{
        width: 70%;
    }

      /* --------------------------------------- Display - Flex styles ------------- */
    .d_flex_row{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .flex_1{
        flex: 1;
    }
    .align_start{
        align-items: flex-start;
    }
    .column_gap_2{
        column-gap: 2rem;
    }
    .column_gap_10{
        column-gap: 10rem;
    }
    /* --------------------------------------- Margin styles ------------- */

    .text_white{
        color: white !important;
    }
    .text_bold{
        font-weight:bold !important;
    }
    .m_auto{
        margin: 0 auto;
    }
    .header_color{
        color: ${secondaryColor} !important;
        font-size: 4rem !important;
        line-height: 1.5 !important;
        font-weight: bold !important;
    }
    .subtitle_color{
        color: ${secondaryColor} !important;
    }
    .footer_color{
        color: ${secondaryColor} !important;
        font-size: 2rem !important;
        line-height: 1.5 !important;
    }    

`;

export default GlobalStyle;
