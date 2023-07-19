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
    >
      {ourService &&
        ourService.map(serviceItem =>

          <DescriptionOurClients key={serviceItem}>

            {ourService && <h2>{serviceItem.heading}</h2>}
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
const Services = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  color: white;
  position: relative;
  text-align: center;
  background: white;
  height: 60vh;
  text-align: center;
  background: white;

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled(motion.div)`
  flex-basis: 15rem;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #e4b2d6;
    height: 10rem;
    width: 10rem;

    border-radius: 50%;

  
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
    h3 {
      font-size: 17px;
      text-transform: uppercase;
      font-weight: bolder;
      color: #000000;
      margin-bottom:.6rem
    }
    span {
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
      font-weight: 500;
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
