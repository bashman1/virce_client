import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import tabiisaLog from "../img/Tambiisa-Logo-transformed.png"
import { photoAnim } from "../animation";
import axios from "axios";

const Nav = () => {
  const { pathname } = useLocation();
  const [topBanner, setTopBanner] = useState(null)
  const [navSection, setNavSection] = useState(null)
const base_url = "http://virce.co.ug/core/api/public-web-content";
  useEffect(()=>{

    const getTopBanner = async () => {
      const {data:{data}} = await axios.post(base_url, {postData:"TOP_BANNER"})
      setTopBanner(data)
    }
    // 
    const getNavSection= async () => {
      const {data:{data}} = await axios.post(base_url, {postData:"NAV_SECTION"})
      setNavSection(data)
    }
    getTopBanner();
    getNavSection();
  },[])
 

        const navBarSection = [
          {
            companyLogo:"../img/Tambiisa-Logo-transformed.png",
            companyName:"tambisa",
          },
          {
            menus:[
             {name:"HOME", routeLink:"/"},
             {name:"ABOUT", routeLink:"/about"},
             {name:"CONTACT US", routeLink:"/contact"}
            ]
          }
        ]
       
    
        return (
          <StyledTop>
            {topBanner && (
              <StyledTopExtra>
                {topBanner.map((obj) => {
                  return <>
                  <TopItem key={obj.contact}>
                    <span>Call Us</span>
                    <span>
                      <i className="uil uil-phone"></i>
                    </span>
                    <span>{obj.contact}</span>
                  </TopItem>
                  <TopItem>
                  <span>
                    <i className="uil uil-telegram-alt"></i>
                  </span>
                  <span>{obj.email}</span>
                </TopItem>
        
                <TopItem>
                  <span>
                    <i className="uil uil-map-marker"></i>
                  </span>
                  <span>{obj.address.map(addrr => <spa>{addrr}</spa>)}</span>
                </TopItem>
                  </>
                  })}
        
                
              </StyledTopExtra>
            )}
        
            <StyledNav>
              {navSection && (<LogoContainer>
                <Link id="logo" to="/">
                  {navSection.map(nav => <Hide>
                    <motion.img
                      variants={photoAnim}
                      src={nav.companyLogo}
                      alt={nav.companyLogo}
                    />
                  </Hide>)}
                  
                </Link>
              </LogoContainer>)}
              <ul>
                <li>
                  <Link to="/tambisa">Home</Link>
                  <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/tambisa" ? "90%" : "0%" }}
                  />
                </li>
                <li>
                  <Link to="/tambisa/work">About Us</Link>
                  <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/tambisa/work" ? "90%" : "0%" }}
                  />
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                  <Line
                    transition={{ duration: 0.75 }}
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/tambisa/contact" ? "90%" : "0%" }}
                  />
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
background: #93db32!important;
padding: .5rem 6rem !important;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
flex-wrap: wrap;

 @media (max-width: 1226px){
        font-size: 75%;
        padding: .5rem 2rem !important;
    }
    @media (max-width: 678px){
        flex-direction: column;
    }
 @media (max-width: 356px){
        justify-content:flex-start;
    }
`
const TopItem = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
column-gap: 1rem;
flex-wrap: nowrap;
flex: 1;

  @media (max-width: 356px){
       width: 100%;
    }

  span{
    color: white;
    font-size: 1rem;

   @media (max-width: 356px){
        &:nth-child(1){
          display: none;
        }
    }

}
`
const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 7rem;
  width: 100%;
  background: #ffffff80 !important;
  backdrop-filter: blur(1rem);
  box-shadow: 0px 1px 10px #0000003d;

 @media (max-width: 1300px){
        padding: 0 !important;
    }
   @media (max-width: 1054px){
        padding: 0 !important;
    }
  

  z-index: 10;
  
  a {
    color: #000000;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;

  @media (max-width: 1300px){
        padding: 0 !important;
        width: 50vw !important;
        display: flex !important;
    }
   @media (max-width: 1054px){
        padding: 0 !important;
        display: block;
    }
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

const Hide = styled.div`
  overflow: hidden;
  height: 6.4rem;

  img {
    width: 144px;
    height: 100%;
    object-fit:cover;
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: 25%;
  left: 25%;

  @media (max-width: 1300px) {
    left: 0%;
  }
`;

const LogoContainer = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  position: relative;

`;


export default Nav;
