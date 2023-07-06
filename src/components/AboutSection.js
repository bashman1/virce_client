import React from "react";
import home1 from "../img/getPaidStock.png";
import { About, DescriptionAbout, Image, Hide, Ellipse } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <DescriptionAbout>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
            VANILLA INNOVATION AND EXPANSION FUND(VIEF) 
              {/* We serve Fresh Vegestables & Fruits */}
            </motion.h2>
            <motion.h3 variants={titleAnim}>
              We deliver organic vegetables & fruits
            </motion.h3>
          </Hide>
        </motion.div>

        <motion.button variants={fade}>View Details</motion.button>
      </DescriptionAbout>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>

      <Ellipse></Ellipse>
    </About>
  );
};

//Styled Components

export default AboutSection;
