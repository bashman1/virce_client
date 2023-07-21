import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {photoAnim} from "../animation";
import axios from "axios";
import { base_url } from '../api';


const AboutHeader = () => {
  const [aboutHeader, setAboutHeader] = useState(null);


  useEffect(() => {
    const getAboutHeader = async () => {
      const {
        data: { data },
      } = await axios.post(base_url, { postData: "ABOUT_HEADER" });
      setAboutHeader(prev => data);
    };

    getAboutHeader();
  }, []);
    return(
        <Movie>
          {aboutHeader && 
            <Hide>
                
            <motion.img variants={photoAnim} src={aboutHeader.aboutImg} alt="athlete" />
            <div className="about_title">
              <p className="breadcrumbs">            
                <span className="mr-2"><Link to="/">{aboutHeader.subHeading}</Link></span>
              </p>
              <h1 className="mb-0 bread">{aboutHeader.heading}</h1>
            </div>
          </Hide>
          }
            
          </Movie>
    )
};

//Styled Components
const Movie = styled(motion.div)`
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;  
  }
`;

const Hide = styled.div`
  overflow: hidden;
  position:relative;

  .about_title{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    p{
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 3px;
      margin-bottom: 0;
      z-index: 99;
      font-weight: 300;
      color: white;
      padding: 0;

      .mr-2{        
        margin-right: 0.5rem !important;
        a{
          color: white;
        }
      }
      span{
          color: white;
      }
    }

    h1{
      font-weight: 800;
      color: #fff;
      font-size: 30px;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
`;
export default AboutHeader;
