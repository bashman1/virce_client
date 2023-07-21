import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScroll } from "../components/useScroll";
import {fade } from "../animation";
import axios from "axios";
import { base_url } from '../api';


const AboutVideo = () => {
    const [element, controls] = useScroll();
    const [aboutVideo, setAboutVideo] = useState(null);


    useEffect(() => {
      const getAboutVideo = async () => {
        const {
          data: { data },
        } = await axios.post(base_url, { postData: "VIDEO_SECTION" });
        setAboutVideo(prev => data);
      };
  
      getAboutVideo();
    }, []);

return (
    <VegieLeft ref={element} variants={fade} animate={controls} initial="hidden">
      {aboutVideo && 
        <>
         <video src={aboutVideo.videoLink} alt="theracer" />
        <div className="mouse">
        <Link href="#" className="mouse-icon">
            <div className="mouse-wheel"><i className="uil uil-play"></i></div>
        </Link>
        </div></>
      }
       
    </VegieLeft>
);
};

//Styled Components
const VegieLeft = styled.div`
  position: relative;
  height: inherit;
  flex:1;
  padding: 3rem 10rem;
  display: flex;
  flex-direction: column;
  height: 100vh;

  img{
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .mouse{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);

    .mouse-icon{
      width: 100px;
      height: 100px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      background: #82ae46;
      cursor: pointer;
      position: relative;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .mouse-wheel{
        i{
          font-size: 3rem;
          color: white;
        }
      }
    }
  }
`;
export default AboutVideo;