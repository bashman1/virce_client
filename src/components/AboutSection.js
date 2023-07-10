import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import home1 from "../img/cover2.png";
import { About, DescriptionAbout, Image, Hide, Ellipse } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import styled from "styled-components";


const AboutSection = () => {
  return (
    <About>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <DescriptionAbout>
        <StyledHeaderText>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Vanilla Innovation and
              {/* We serve Fresh Vegestables & Fruits */}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Expansion
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h3 variants={fade}>
              We deliver organic vegetables & fruits
            </motion.h3>
          </Hide>
        </StyledHeaderText>

        <motion.button variants={fade}><Link to="/work">About Tambiisa</Link></motion.button>
      </DescriptionAbout>


      <Ellipse></Ellipse>
    </About>
  );
};

//Styled Components
const StyledHeaderText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;

  h2{
    text-shadow: 0 2px 2px rgba(0,0,0,.5);
    font-size: 5rem;
  }

`
export default AboutSection;
