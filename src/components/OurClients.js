import React, { useEffect, useState } from "react";

//Styles
import { DescriptionOurClients, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import axios from "axios";
import { base_url } from '../api';

const OurClients = () => {
  const [element, controls] = useScroll();

  const [ourService, setOurService] = useState([{
    heading: "",
    cards: []
  }])


  useEffect(() => {

    const getOurService = async () => {
      const { data: { data } } = await axios.post(base_url, { postData: "OUR_SERVICES" })
      setOurService(data);



    }

    getOurService()
  }, [])
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      id="ourOffering"
    >
      {ourService &&
        ourService.map(serviceItem =>

          <DescriptionOurClients key={serviceItem}>

            {ourService && <h2 className="header_color">{serviceItem.heading}</h2>}

            <Cards>
              {serviceItem.cards.map(item => <Card key={item.id} {...item} />)}

            </Cards>
          </DescriptionOurClients>)

      }
    </Services>
  );
};

const Card = (props) => {
  return (
    <StyledCard>
      <div className="icon">
        <div className="inner_circle">
          <Image>
            <img src={props.imgSrc} alt={props.imageDescription} />
          </Image>
        </div>
      </div>
      <div className="media-body">
        <h3 className="heading">{props.cardTitle}</h3>
        <span>{props.cardSubtitleTitle}</span>
      </div>
    </StyledCard>
  )
}
const Services = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  color: white;
  position: relative;
  text-align: center;
  background: white;
  height: 90vh;
  text-align: center;
  background: white;
  margin-top: 10vh;

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content: flex-start;
  flex-direction: column;
  background: linear-gradient(130deg,#fcac9c,#feaf9a 41.07%,#fcac9c 76.05%);
  min-height: 40vh;  
  padding: 1.5rem;
  border-radius: 2rem;
  overflow: visible;
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #530f02;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    position: absolute;
    top: -4rem;
  
    .inner_circle {
      display:flex;
      align-items: center;
      justify-content: center;
      height: 8rem;
      width: 8rem;
      border-radius: 50%;
      border: 3px solid #e9c1de;
      

      img{
      border-radius: 50%;
      width: 7rem;
      height: 7rem;
      text-align: center;
      }

      i {
        font-size: 40px;
        color: #fff;
      }

    }    
   .inner_last{
        border: 3px solid #e3dea6;    
    }
   
  }
  .media-body{
    width:100%;
    flex: 1;
   
    margin-top: 7rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    overflow: hidden;
    text-overflow: ellipsis; 
    h3 {
      font-size: 17px;
      text-transform: capitalize;
      font-weight: bolder;
      color: #ffffff;     
      text-align: center;
    }
    span {
      text-align: justify;
      margin-top:.6rem;
      text-transform: capitalize;
      color: #530f02;
      font-size: 12px;
      font-weight: 500;
      display: block;
      padding-bottom:1rem;
    }
  }
  .ic_2{
      background: #dcc698;
    }
  .icon_c{
      background: #dcd691;
  }
`;

export default OurClients;
