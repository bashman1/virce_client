import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Image } from "../styles";
//Animations
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { photoAnim_contactUs, pageAnimation } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
// api
import axios from "axios";
import { base_url } from "../api";

const Gallery = () => {
  const [element, controls] = useScroll();

  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    const getcontactUs = async () => {
      const {data}= await axios.post(base_url, { postData: "GALLERY" });
     
      setGallery(prev => data);
    };

    getcontactUs();
  }, []);

  console.log("gallery", gallery)
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {gallery &&
        <>
        <Movie>
          <Hide>
            <motion.img
              variants={photoAnim_contactUs}
              src={gallery.galleryHeader.imgSrc}
              alt="image"
            />
            <div className="about_title">
              <h1 className="mb-0 bread">{gallery.galleryHeader.heading}</h1>
              <p>{gallery.galleryHeader.subheading}</p>
            </div>
          </Hide>
        </Movie>

        {gallery.sections && 
          gallery.sections.map(item => 
            
            <StyledLatest
            ref={element}
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            >
            <div>
              <h1 className="mb-0 bread">{item.title}</h1>
              <p className="mb-0 bread">{item.sub_title}</p>
            </div>

           <StyledImageContainer>
             {item.images.map((image) => (
               <Image>
                 <img src={image.imgSrc} alt={image.imgDesc} />
               </Image>
             ))}
           </StyledImageContainer>
         </StyledLatest>
            )
        }
    </>
      } 

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
  row-gap: 1rem;
  min-height: 100vh;
`;
const StyledBestMoments = styled(motion.div)`
  padding: 5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 1rem;
  min-height: 100vh;
`;
const StyledImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const StyledImageBM = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  grid-gap: .5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledImage = styled(motion.div)`
  z-index: 2;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1){
    grid-column: 1/3;
  }
  &:nth-child(2){
    grid-column: 3/4;
    grid-row: 1/3;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
  position: relative;
`;

//Frame Animation

export default Gallery;
