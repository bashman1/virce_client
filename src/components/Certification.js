import React, { useEffect, useState } from "react";
// Data
//Import Icons
import Wave from "../components/Wave"
//Styles
import styled from "styled-components";
import { useScroll } from "./useScroll";
//Framer Motion
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { base_url } from "../api";
import axios from "axios";


const Certification = () => {
  const [element, controls] = useScroll();

  const [ourCerification, setOurCerification] = useState(null);

  useEffect(() => {
    const getOurCertification = async () => {
      const {
        data: { data },
      } = await axios.post(base_url, { postData: "CERTIFICATION" });
      setOurCerification(prev => data);
    };

    getOurCertification();
  }, []);


  // ======================================================== RETURN ===================
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      whileInView="visible"

    >
       {ourCerification && ourCerification.map(cert => 
          <StyledCertification>
         {cert.heading && <h2>{cert.heading}</h2> }
          {cert.subtitle && <span className="subheading">{cert.subtitle}</span> }
        
          {cert.text &&  <p>{cert.text }</p> }
          
          {cert.certList && 
          <Cards>
            { cert.certList.map(certItem => <Card key={certItem.id} {...certItem} /> )}
          </Cards>
            
          }
  
          
        </StyledCertification>
        )}
    
      <Wave />
    </Services>
  );
};

// ===================================================  Card Components ============
const Card = (props) => {
  return (
    <StyledCard>
     <span className="svg_container">
        <motion.img variants={scrollReveal} src={props.img} alt="crop_icon" />
      </span>
      <h3 className="card_title">{props.name}</h3>
      <p>
        {props.description}
      </p>
    </StyledCard>
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

  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
    text-align: justify;
  }
`;

const StyledCertification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 1rem 10rem;
  background: #f7f6f2;

   .subheading {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-style: italic;
    color: #82ae46;
    }

    h2{
      color: #000000;    
    }
    p{
      color: rgba(0,0,0,0.8);
      width:80%;
      margin:0 auto;
      font-size:1.15rem;
    }
`
const Cards = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  width: 70%;
  margin: 5rem auto 2rem auto;
  grid-gap: 3rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  overflow: hidden;

  /* Inside auto layout */
  span{
    display:block;
    img {
      width: 30%;
      object-fit: cover;
      margin:1rem auto;
    }

  }
  
  h3 {
     font-size: 1.7rem;
      margin-bottom: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      width: 90%;
      text-align: center;
      margin: 0 auto 0 auto;
      color: #82ae46;
    }

    p {
      font-size: 1.2rem;
      width: 90%;
      padding: 1.5rem 0;
      align-self: flex-start;
      color: #000001;
       text-align: center;
    }
`;

export default Certification;
