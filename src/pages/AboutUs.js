import React, { useEffect, useState } from "react";
//Page Components
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import axios from "axios";
import styled from "styled-components";
import { fade, photoAnim, titleAnim } from "../animation";
import { base_url } from "../api";
import Certification from "../components/Certification";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import OurClients from "../components/OurClients";
import OurServices from "../components/OurServices";
import Testimonies from "../components/Testimonies";
import Vegetables from "../components/Vegetables";
import OurPartners from "../components/OurPartners";
import { About, DescriptionAbout, Ellipse, Hide } from "../styles";
import { path } from "../api";
import nextArrow from "../img/next.png";
import prevArrow from "../img/back.png";


//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  const [header, setHeader] = useState(null);
  const [title, setTitle] = useState(null);
  const [subtitle, setSubtitle] = useState(null);
  const [sliderImges, setSliderImges] = useState(null);

  useEffect(() => {
    const getHeader = async () => {
      try {
        if (base_url) {
          const {
            data: { data },
          } = await axios.post(base_url, { postData: "HEADER_SECTION" });
          setHeader((prev) => data);

          if (header) {
            let [{ title, subtitle, sliderImges }] = header;

            setTitle(title);
            setSubtitle(subtitle);
            setSliderImges(sliderImges);
          }
        }
      } catch (error) {}
    };

    getHeader();
  }, [header]);

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
            {sliderImges && <SlideImages sliderImges={sliderImges} />}

            <DescriptionAbout>
              <StyledHeaderText>
                <Hide>
                  {title && <motion.h2 variants={titleAnim}>{title}</motion.h2>}
                </Hide>
                <Hide>
                  <motion.h2 variants={titleAnim}></motion.h2>
                </Hide>
                <Hide>
                  {subtitle && (
                    <motion.h3 variants={fade}>{subtitle}</motion.h3>
                  )}
                </Hide>
              </StyledHeaderText>
              <motion.button variants={fade}>
                <Link to={`${path}work`}>About Tambiisa</Link>
              </motion.button>
            </DescriptionAbout>
          </>
        )}
        <Ellipse></Ellipse>
      </About>
      <OurClients />
      <Vegetables />
      <OurServices />
      <Projects />
      <Testimonies />
      <Certification />
      <OurPartners />
      <Footer />
    </motion.div>
  );
};

const SlideImages = ({ sliderImges }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let interval = null;
    if (sliderImges) {
      interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % sliderImges.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [currentImage, sliderImges, sliderImges.length]);

  // ================================================== manually slide the images
  const goToNextImage = () => {
    setCurrentImage((currentImage + 1) % sliderImges.length);
  };

    // ================================================== manually slide prevous images
  const goToPreviousImage = () => {
    setCurrentImage((currentImage - 1 + sliderImges.length) % sliderImges.length);
  };
  return (
    <StyledImagesAboutUs>
      {sliderImges && (
        <motion.img
          variants={photoAnim}
          key={sliderImges[currentImage].id}
          src={sliderImges[currentImage].imgSrc}
          alt={sliderImges[currentImage].imageDescription}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      )}

      <div className="arrow arrow_container" onClick={goToNextImage}>
        <motion.img
          className="next_arrow"
          variants={photoAnim}
          src={nextArrow}
          alt="next-arrow"
        />
      </div>
      <div className="arrow arrow_container_prev" onClick={goToPreviousImage}>
        <motion.img
          className="prev_arrow"
          variants={photoAnim}
          src={prevArrow}
          alt="back-arrow"
        />
      </div>
    </StyledImagesAboutUs>
  );
};
//Styled Components
const StyledHeaderText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
  width: 80%;
  margin: 0 auto;

  h2 {
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 5rem;
  }
`;

const StyledImagesAboutUs = styled(motion.div)`
  z-index: 2;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .arrow {
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 5rem;
    display: flex;
    top: 50%;
    cursor: pointer;
  }
  .arrow_container {
    right: 5%;  
    transform: translate(-50%, -5%);      
  }
  .arrow_container_prev {
    left: 5%;  
    transform: translate(-5%, -50%);      
  }
`;
export default AboutUs;
