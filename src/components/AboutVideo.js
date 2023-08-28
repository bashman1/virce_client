import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useScroll } from "../components/useScroll";
import { fade } from "../animation";
import axios from "axios";
import { base_url } from "../api";


const AboutVideo = () => {
  const [aboutVideo, setAboutVideo] = useState(null);
  const [element, controls] = useScroll();
  const [isAutoplay, setIsAutoplay] = useState(false)



  const loopVideo = () =>{
    setTimeout(() => {

      setIsAutoplay(prev => !prev)
    }, 5000);
  } 
  useEffect(() => {
    const getAboutVideo = async () => {
     
      try {
      const {
        data: { data },
      } = await axios.post(base_url, { postData: "VIDEO_SECTION" }, {
        withCredentials: false
      });

      setAboutVideo((prev) => data);
     } catch (error) {

      // TODO: re-align show error messages to be reusable everywhere.
     
     }
      
    };

    getAboutVideo();
    loopVideo()

  }, [isAutoplay]);

  return (
    <VegieLeft
      ref={element}
      variants={fade}
      animate={controls}
      initial="hidden"
    >
      {aboutVideo && aboutVideo.map((obj) => <h2>{obj.text}</h2>)}
      {aboutVideo &&
        aboutVideo.map((obj) => (
          <iframe
            title="Tambisa CEO explaning about Tambisa"
            src={`https://www.youtube.com/embed/${obj.videoLink}?autoplay=1&loop=1&mute=1`}
            allowFullScreen={true}
            frameborder="0"
            sandbox="allow-scripts allow-same-origin"
            seamless={true}
            loading="lazy"
            allow="accelerometer; autoplay;loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          ></iframe>
        ))}
    </VegieLeft>
  );
};

//Styled Components
const VegieLeft = styled.div`
  position: relative;
  height: inherit;
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;

  max-height: 98vh;
  width: 70%;
  margin: 0 auto;

  iframe {
    border-radius: 1rem;
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  h2 {
    width: 100%;
    text-align: center;
  }
`;
export default AboutVideo;
