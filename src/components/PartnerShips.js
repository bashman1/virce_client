import React from "react";
import home1 from "../img/bg_3.jpg";
import { DescriptionAbout, Image } from "../styles";
import Styled from "styled-components"
//Framer Motion
import { motion } from "framer-motion";
import { photoAnim } from "../animation";

const PartnerShips = () => {
  return (
    <StyledPartnerships>
      <AboutProjects className="row">
        <div className="text">
          <strong className="number" data-number="10000">10,000</strong>
          <span>Happy Customers</span>
        </div>
        <div className="text">
          <strong className="number" data-number="100">100</strong>
          <span>Branches</span>
        </div>
        <div className="text">
          <strong className="number" data-number="1000">1,000</strong>
          <span>Partner</span>
        </div>
        <div className="text">
          <strong className="number" data-number="100">100</strong>
          <span>Awards</span>
        </div>
      </AboutProjects>

      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>

    </StyledPartnerships>
  );
};

//Styled Components
const StyledPartnerships = Styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
  position: relative;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const AboutProjects = Styled(DescriptionAbout)`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width: 60%;

  .text{
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    color: #82ae46;
    text-align: center !important;

    .number{
      font-weight: 400;
      font-size: 30px;
      color: #000000;
    }
    span {
      display: block;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center !important;
    }
  }
  h2{
    position: relative;
    font-size: 40px;
    font-weight: 600;
    color: #000000;
    margin-bottom:1.5rem;
    text-align:left
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    margin-bottom: 1rem;
    margin-top:0;
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
    margin-top: 3rem !important;
    display: flex !important;

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
export default PartnerShips;
