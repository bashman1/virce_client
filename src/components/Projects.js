import React, { useEffect, useState } from "react";

import {   Image } from "../styles";
import Styled from "styled-components"
//Framer Motion
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
// api
import axios from "axios";
import { base_url } from "../api";
import styled from "styled-components";

const Projects = () => {
  const [ourProjects, setOurProjects] = useState(null);
  const [element, controls] = useScroll();

  useEffect(() => {
    const getOurProjects = async () => {
      const {data:{data:[data]}}= await axios.post(base_url, { postData: "PROJECTS" });

      setOurProjects(prev => data);
    };

    getOurProjects();
  }, []);

  return (
    <Services
    variants={scrollReveal}
    animate={controls}
    initial="hidden"
    ref={element}
    whileInView="visible"

  >
     <StyledProjects id="initiatives">
      <AboutProjects>
        {ourProjects && ourProjects.map((projInfo, index) =>

          <>           
            {projInfo.heading && <h2 >{projInfo.heading}</h2>}
            {(projInfo.subtitle && index === 0) && <span className="subheading">{projInfo.subtitle}</span>}

            {projInfo.text && <p dangerouslySetInnerHTML={{__html:projInfo.text}}></p>}
            {projInfo.middleText && <p>{projInfo.middleText}</p>}

            {projInfo.projectStats &&

              <div id="timer" className="d-flex mt-5">
                {
                  projInfo.projectStats.map((prodStat, index) =>
                    <motion.div className={index > 0 ? "time pl-3" : "time"} id="days">
                      {prodStat.stats}
                      <span>{prodStat.name}</span>
                    </motion.div>
                  )
                }
              </div>
            }
          </>
        )}
      </AboutProjects>
      <Image>
        {ourProjects && ourProjects.map((projInfo, index) => 
          projInfo.prodImgSrc &&
            <motion.img variants={scrollReveal} src={ projInfo.prodImgSrc} alt="guy with a camera" />
        )}
      </Image>
      
    </StyledProjects>
  </Services>
   
  );
};

const Services = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  color: white;
  position: relative;
  text-align: center;
  background: white;
  min-height: 100vh !important;
  padding-top: 2rem;
  margin-top: 10vh;

  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
    text-align: justify;
  }
`;
//Styled Components
const StyledProjects = Styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    color: white;
    position: relative;    
  overflow: hidden;
  color: white;
  position: relative;


  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }


  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const AboutProjects = Styled(motion.div)`
backdrop-filter: blur(.5rem);
background: #000000ad;
padding: 2rem;
border-radius: 7rem 0 7rem 0;
width: 90%;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  text-align: center;
  height: 90vh;

  .subheading{
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-style: italic;
    color: #82ae46;

  }
  h2{
    position: relative;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    
    margin-bottom:1rem;
  }
  p{
    padding: 1rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    margin-bottom: 1rem;
    margin-top:0;
    text-align: justify;
  }
  h3{

    a{
        color: #82ae46;
        font-size: 30px;
        font-style: italic;
    }
  }
  .price{
    color: rgba(0, 0, 0, 0.5);
    a{
        font-weight: 500;
        font-size: 18px;
        color: #82ae46;    
    }
  }
  #timer{
    width: 80%;
    margin-top: 1rem !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;

    .time{
      width: 25%;
        font-size: 40px;
        font-weight: 500;
        border-left: 1px solid rgba(0, 0, 0, 0.05);
        color: #82ae46;

        span{
            color: #000000;
            font-size:12px;
            text-transform:uppercase;
            display:block;
        }
    }
  }
`
export default Projects;
