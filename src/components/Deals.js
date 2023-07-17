import React from "react";
import home1 from "../img/bg_3.jpg";
import { About, DescriptionAbout, Image } from "../styles";
import Styled from "styled-components"
//Framer Motion
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { Link } from "react-router-dom";

import { useScroll } from "./useScroll";


const Deals = () => {
  const [element, controls] = useScroll();
  return (
    <StyledDeals
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}

    >
      <AboutDeals>
        <span className="subheading">Best Price For You</span>

        <motion.h2>Green Vanilla Production Volumes</motion.h2>

        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

        <h3><Link href="#">Spinach</Link></h3>

        <span className="price">$10 <Link href="#">now $5 only</Link></span>

        <div id="timer" className="d-flex mt-5">
          <motion.div className="time" id="days">-1291<span>Days</span></motion.div>
          <motion.div className="time pl-3" id="hours">04<span>Hours</span></motion.div>
          <motion.div className="time pl-3" id="minutes">47<span>Minutes</span></motion.div>
          <motion.div className="time pl-3" id="seconds">31<span>Seconds</span></motion.div>
        </div>
      </AboutDeals>
      <Image>
        <motion.img variants={scrollReveal} src={home1} alt="guy with a camera" />
      </Image>

    </StyledDeals>
  );
};

//Styled Components
const StyledDeals = Styled(About)`
height: 90vh;
`;

const AboutDeals = Styled(DescriptionAbout)`
  top: 8rem;
  right: 5%;
  transform: none;
  width: 50%;
  text-align:left;

  .subheading{
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-style: italic;
    color: #82ae46;
  }
  h2{
    position: relative;
    font-size: 40px;
    font-weight: 600;
    color: #000000;
    margin-bottom:1.5rem;
    text-align:left
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    margin-bottom: 1rem;
    margin-top:0;
  }
  h3{

    a{
        color: #82ae46;
        font-size: 30px;
        font-style: italic;
    }
  }
  .price{
    color: rgba(0, 0, 0, 0.5);
    a{
        font-weight: 500;
        font-size: 18px;
        color: #82ae46;    
    }
  }
  #timer{
    width: 80%;
    margin-top: 3rem !important;
    display: flex !important;

    .time{
      width: 25%;
        font-size: 40px;
        font-weight: 500;
        border-left: 1px solid rgba(0, 0, 0, 0.05);
        color: #82ae46;

        span{
            color: #000000;
            font-size:12px;
            text-transform:uppercase;
            display:block;
        }
    }
  }
`
export default Deals;
