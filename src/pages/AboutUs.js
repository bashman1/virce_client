import React, { useState, useEffect } from 'react';
//Page Components
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import home1 from "../img/cover2.png";
import home2 from "../img/getPaidStock.png";
import home3 from "../img/ginger-plant-compressed.webp";
import OurClients from "../components/OurClients";
import Vegetables from "../components/Vegetables";
import OurServices from "../components/OurServices";
import Deals from "../components/Deals";
import Footer from "../components/Footer";
import Testimonies from "../components/Testimonies"
import Certification from "../components/Certification"
import { About, DescriptionAbout, ImageNav, Hide, Ellipse } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import styled from "styled-components";
import axios from "axios";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [header, setHeader] = useState(null)

  const base_url = "http://virce.co.ug/core/api/public-web-content";
  let title = ""
  let subtitle = ""
  let sliderImges =[]

  useEffect(()=>{

    const getHeader = async () => {
      const {data:{data}} = await axios.post(base_url, {postData:"HEADER_SECTION"})
      setHeader(data)

    }
   
    getHeader();
  },[])

  useEffect(() => {   
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
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
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <About>
      {header && (
        <>
      <ImageNav>
        <motion.img variants={photoAnim} key={images[currentImage].id}
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} />
      </ImageNav>
      <DescriptionAbout><StyledHeaderText>
          <Hide>
            <motion.h2 variants={titleAnim}>
            {header[0].title}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h3 variants={fade}>
            {subtitle}
            </motion.h3>
          </Hide>
        </StyledHeaderText>

        <motion.button variants={fade}><Link to="/work">About Tambiisa</Link></motion.button>
      </DescriptionAbout>
      </>
    )}
      <Ellipse></Ellipse>
      </About>
      <OurClients />
      <Vegetables />
      <OurServices />
      <Deals />
      <Testimonies />
      <Certification />
      <Footer />
    </motion.div >
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
export default AboutUs;
