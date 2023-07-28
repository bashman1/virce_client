import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {galleryData} from "../galleryData.js";
import { Image } from "../styles";
//Animations
import { motion } from "framer-motion";
import {
  photoAnim_contactUs,
  photoAnim,
  pageAnimation,
  fade,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
// api
import axios from "axios";
import { base_url } from "../api";

const Gallery = () => {
  const [element, controls] = useScroll();

  const [gallery, setGallery] = useState(galleryData);

  useEffect(() => {
    // const getcontactUs = async () => {
    //   const {data:{data:[data]}}= await axios.post(base_url, { postData: "GALLERY" });

    //   setGallery(prev => data);
    // };

    // getcontactUs();
    setGallery((prev) => gallery);
  }, [gallery]);

  
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {gallery && gallery.map(galleryItem => 
        <>
        {galleryItem.galleryHeader &&  galleryItem.galleryHeader.map((item) => (
          <Movie>
            <Hide>
              <motion.img
                variants={photoAnim_contactUs}
                src={item.imgSrc}
                alt={item.imgDesc}
              />
              <div className="about_title">
                <h1 className="mb-0 bread">{item.heading}</h1>
                <p>{item.subheading}</p>
              </div>
            </Hide>
          </Movie>
        ))}

        {/* {galleryItem.ourLastest && 
                <StyledLatest
                  ref={element}
                  variants={fade}
                  animate={controls}
                  initial="hidden"
                >
                  <h1 className="mb-0 bread">{galleryItem.ourLastest.heading}</h1>
                  <StyledImageContainer>
                    {galleryItem.ourLastest.images.map((image) =>   
                      <Image>
                        <img src={image.imgSrc} alt={image.imgDesc} />
                      </Image>
                    )}
                  </StyledImageContainer>
                </StyledLatest>
              }

      {galleryItem.bestMoments && 
              <StyledLatest
                ref={element}
                variants={fade}
                animate={controls}
                initial="hidden"
              >
                <h1 className="mb-0 bread">{galleryItem.bestMoments.heading}</h1>
                
                <StyledImageContainer>
                  {galleryItem.bestMoments.images.map((image) =>   
                    <Image>
                      <img src={image.imgSrc} alt={image.imgDesc} />
                    </Image>
                  )}
                </StyledImageContainer>
              </StyledLatest>
            } */}
        </>
      )}
      <Footer />
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  background: #f7f6f2 !important;

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledLatest = styled(motion.div)`
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 5rem;
  min-height: 100vh;
  overflow: hidden;
  background: red;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const StyledImageContainer = styled.div`
background-color: red;
`
const Hide = styled.div`
  overflow: hidden;
  position: relative;
`;

//Frame Animation

export default Gallery;
