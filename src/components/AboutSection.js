import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import home1 from "../img/cover2.png";
import home2 from "../img/getPaidStock.png";
import home3 from "../img/ginger-plant-compressed.webp";
import { About, DescriptionAbout, ImageNav, Hide, Ellipse } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import styled from "styled-components";


const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage => currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const images = [
    {
      id: 1,
      src: home1,
      alt: 'Image 1'
    },
    {
      id: 2,
      src: home2,
      alt: 'Image 2'
    },
    {
      id: 3,
      src: home3,
      alt: 'Image 3'
    }
  ];
  return (
    <About>
      <ImageNav>
        <motion.img variants={photoAnim} key={images[currentImage].id}
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} />
      </ImageNav>
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

        <motion.button variants={fade}><Link to="/work">---oiusfsyudgbuoj</Link></motion.button>
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
