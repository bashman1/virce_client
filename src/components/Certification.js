import React, { useState } from "react";
// Data
import { CertificationData } from "../CertificationsData";
//Import Icons
import Wave from "../components/Wave"
//Styles
import { About } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
//Framer Motion
import { motion } from "framer-motion";
import { photoAnim } from "../animation";

const Certification = () => {
  const [element, controls] = useScroll();
  const [certData, setCertData] = useState(CertificationData)

  let card = certData.map(card => <Card>
    <span className="svg_container">
      <motion.img variants={photoAnim} src={card.icon} alt="crop_icon" />
    </span>
    <h3 className="card_title">{card.title}</h3>
    <p>
      {card.subtitle}
    </p>

  </Card>);
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledCertification>
        <span class="subheading">WHAT WE DO</span>
        <h2>Tambisa Certification</h2>
        <p>Our company offers a variety of services to meet you project's needs, to take you fromo collaboration meetins all the way to ribbon-cutton and beyond. We believe that every project is unique, and can customize our approach to fit your prticular projects</p>

        <Cards>
          {card}
        </Cards>
      </StyledCertification>
      <Wave />
    </Services>
  );
};

const Services = styled(About)`
  text-align: center;
  background: white;

  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
  }
`;

const StyledCertification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 5rem 10rem;
  background: #f7f6f2;

   .subheading {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-family: "Lora", Georgia, serif;
    font-style: italic;
    color: #82ae46;
    }

    h2{
      color: #000000;    
    }
    p{
      color: rgba(0,0,0,0.8);
      width:60%;
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

const Card = styled.div`
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
      color: #000000;
    }

    p {
      font-size: 1.2rem;
      width: 90%;
      padding: 1.5rem 0;
      align-self: flex-start;
      color: #000001;
    }
`;

export default Certification;