import React from "react";
import home1 from "../img/cover2.png";
import { About, DescriptionAbout, Image, Hide, Ellipse } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <DescriptionAbout>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              VANILLA INNOVATION AND
              {/* We serve Fresh Vegestables & Fruits */}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              EXPANSION
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h3 variants={fade}>
              We deliver organic vegetables & fruits
            </motion.h3>
          </Hide>
        </motion.div>

        <motion.button variants={fade}>View Details</motion.button>
      </DescriptionAbout>


      <Ellipse></Ellipse>
    </About>
  );
};

//Styled Components

export default AboutSection;
