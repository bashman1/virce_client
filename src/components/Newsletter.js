import React from "react";
import styled from "styled-components";

//Framer Motion

const Newsletter = () => {
  return (
    <StyledNewsLetter>

      <div className="newsletter_c">
        <h2 className="newsletter_header">Subcribe to our Newsletter</h2>
        <span>Get e-mail updates about our latest shops and special offers</span>
      </div>

      <form className="newsletter_form">
        <input type="text" className="input_guy" placeholder="Enter email address" />
        <input type="submit" value="Subscribe" className="submit px-3" />
      </form>
    </StyledNewsLetter>
  );
};

//Styled Components
const StyledNewsLetter = styled.div`
  width: 100%;
  margin:0 auto;
  padding: 2rem 10%;
  height: 40vh;
  background: #f7f6f2;
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .newsletter_header{
    font-size: 22px;
    line-height: 1.5;
    font-weight: 400;
    color: #000000;
    font-family: "Poppins", Arial, sans-serif;
  }
  .newsletter_form{
    border: none;
    background: #fff;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;

    .input_guy, .submit{
      width: 80%;
      height: 100%;
      outline: none;
      border:none;
      padding: 0 1rem;
    }
    .submit{
       width: 20%;
      background:#82ae46;
      color: #fff !important;
    }

  }

`;
export default Newsletter;
