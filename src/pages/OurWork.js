import React from "react";
import styled from "styled-components";
//Images

// import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer";
import PartnerShips from "../components/PartnerShips";
import AboutDesc from "components/AboutDesc";
import AboutVideo from "components/AboutVideo";
import AboutHeader from "components/AboutHeader"
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
} from "../animation";

import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
 
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
       
      </motion.div>

      <AboutHeader />
      <AboutDesc />
      <AboutVideo />
      <PartnerShips />
      <Footer />

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;


//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background:  #8effa0;
  z-index: 2;
`;


export default OurWork;
