import React, { useEffect, useState } from "react";

//Styles
import { motion } from "framer-motion";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { DescriptionProducts } from "../styles";
import { useScroll } from "./useScroll";
import axios from "axios";
import { base_url } from "../api";

const OurServices = () => {
  const [element, controls] = useScroll();
  const [ourProducts, setOurProducts] = useState(null);

  useEffect(() => {
    const getOurProducts = async () => {
      const {
        data: { data },
      } = await axios.post(base_url, { postData: "OUR_PRODUCTS" });
      setOurProducts(prev => data);
    };

    getOurProducts();
  }, []);

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      {ourProducts &&
        ourProducts.map(prodInfo =>
          <DescriptionProducts>           
            {prodInfo.heading && <h2 className="header_color">{prodInfo.heading}</h2>}
            {prodInfo.subtitle && <span className="subheading ">{prodInfo.subtitle}</span>}
            {prodInfo.text && <p>{prodInfo.text}</p>}

            <Cards>
              {prodInfo.productList
                ? prodInfo.productList.map((item) => <Card {...item} />)
                : "(Cards Not Set)"}
            </Cards>
          </DescriptionProducts>
        )}

    </Services>
  );
};

// ===================================================  Card Components ============
const Card = (props) => {
  return (
    <StyledCard>
      <div className="icon">
        <img alt="icon" src={props.prodImgSrc} />
        <h4 className="card_title">{props.productName}</h4>
        <p>{props.price}</p>
      </div>
    </StyledCard>
  );
};

// ===================================================  Styled Components ============
const Services = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  text-align: center;
  background: white;
  padding: 0rem 0rem 5rem 0;

  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  width: 80%;
  margin: 0 auto;
  grid-gap: 1.5rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled(motion.div)`
  overflow: hidden;
  border: 1px solid #f0f0f0;

  /* Inside auto layout */
  .icon {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    img {
      width: 75%;
      height: 15rem;
      object-fit: cover;
      margin: 1rem auto;
      border-radius: .8rem;
    }
    h4 {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 300;
      text-transform: uppercase;
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
      color: #949494;
    }
  }
`;

export default OurServices;
