import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledTop>
      <StyledTopExtra>
        <TopItem>
          <span><i class="uil uil-phone"></i></span>
          <span>+ 1235 2355 98</span>
        </TopItem>
        <TopItem>
          <span><i class="uil uil-telegram-alt"></i></span>
          <span>youremail@email.com</span>
        </TopItem>
        <TopItem>
          <span><i class="uil uil-clock-eight"></i></span>
          <span>3-5 Business days delivery & Free Returns</span>
        </TopItem>
      </StyledTopExtra>
      <StyledNav>
        <LogoContainer>
          <Link id="logo" to="/">
            TAMBISA
          </Link>
        </LogoContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Shop</Link>
          </li>
          <li>
            <li>
              <Link to="/work">About Us</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/work" ? "50%" : "0%" }}
              />
            </li>
          </li>
          <li>
            <Link to="/contact">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact"><i class="uil uil-shopping-cart"></i></Link>
          </li>
        </ul>
      </StyledNav>

    </StyledTop>
  );
};

const StyledTop = styled.div`
  min-height: 7.125rem;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  background:white;
  opacity: 0.95;
  backdrop-filter: blur(2px);
  position: sticky;
  top: 0;
  flex-direction: column;

  z-index: 10;
`

const StyledTopExtra = styled.div`
background: #82ae46 !important;
padding: .5rem 0.25rem !important;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`
const TopItem = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
column-gap: 1rem;

span{
  color: white;
}
`
const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;
  width: 100%;

  z-index: 10;
  
  a {
    color: #000000;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    color: #82ae46;
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
  }
  li {
    padding-left: 2rem;
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 40px;

    /* identical to box height */

    color: #d9d9d9;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

const LogoContainer = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 144px;
    height: 56px;
  }
`;


export default Nav;
