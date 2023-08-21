import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
//Animations
import { motion } from "framer-motion";

import { photoAnim_contactUs, pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
// api
import axios from "axios";
import { base_url } from "../api";

const Gallery = () => {

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
            
            <StyledLatest >
            <div className="text_center w_70 m_auto">
              {item.title && <h1 className="mb-0 bread header_color">{item.title}</h1>}
              <p className="mb-0 bread">{item.sub_title}</p>
            </div>

           <StyledImageContainer>
             {item.images.map((image) => (
               <GalleryImage>
                 <img src={image.imgSrc} alt={image.imgDesc} />
               </GalleryImage>
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
position: relative;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  .about_title{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:white;
  }
`;

const StyledLatest = styled(motion.div)`
  padding: 3rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap: 1rem;
  min-height: 50vh;
`;
const GalleryImage = styled(motion.div)`
flex: 1 0 20rem;
  z-index: 2;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {    
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .8rem;
  }
`;
const StyledImageContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
`;


const Hide = styled.div`
  overflow: hidden;
  position: relative;
`;

//Frame Animation

export default Gallery;
