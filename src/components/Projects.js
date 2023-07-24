import React, { useEffect, useState } from "react";

import { About, DescriptionAbout, Image } from "../styles";
import Styled from "styled-components"
//Framer Motion
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";

// api
import axios from "axios";
import { base_url } from "../api";


const Projects = () => {
  const [ourProjects, setOurProjects] = useState(null);

  useEffect(() => {
    const getOurProjects = async () => {
      const {data:{data:[data]}}= await axios.post(base_url, { postData: "PROJECTS" });

      setOurProjects(prev => data);
    };

    getOurProjects();
  }, []);

  return (
    <StyledProjects id="initiatives">
      <AboutProjects>
        {ourProjects && ourProjects.map((projInfo, index) =>

          <>
            {(projInfo.subtitle && index === 0) && <span className="subheading">{projInfo.subtitle}</span>}
            {projInfo.heading && <h2>{projInfo.heading}</h2>}

            {projInfo.text && <p>{projInfo.text}</p>}
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
  );
};

//Styled Components
const StyledProjects = Styled(About)`
height: 100vh;
`;

const AboutProjects = Styled(DescriptionAbout)`
backdrop-filter: blur(.5rem);
background: #000000ad;
padding: 2rem;
border-radius: 7rem 0 7rem 0;
height: 85vh;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 85%;
text-align: center;

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
    
    margin-bottom:1.5rem;
    text-align:left
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
