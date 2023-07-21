import React, { useEffect, useState } from "react";
//Import Icons
// import neptune from "../img/category-3.jpg";
import { motion } from "framer-motion";
//Styles
import axios from "axios";
import styled from "styled-components";
import { fade, scrollReveal } from "../animation";
import { base_url } from "../api";
import { About, DescriptionVegetables, Image } from "../styles";
import { useScroll } from "./useScroll";

const Vegetables = () => {
  const [element, controls] = useScroll();

  const [ourCategories, setOutCategories] = useState(null);

  useEffect(() => {
    const getOurService = async () => {
      const {
        data: { data },
      } = await axios.post(base_url, { postData: "CATEGORIES" });
      setOutCategories(data);
    };

    getOurService();
  }, []);

  return (
    <VegetablesContainer
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      {ourCategories &&
        ourCategories.map((categoryInfo) => (
          <DescriptionVegetables>
            {categoryInfo.heading ? (
              <h2>{categoryInfo.heading}</h2>
            ) : (
              "(Title Not Set)"
            )}

            <Cards>
              {categoryInfo.cards
                ? categoryInfo.cards.map((item) => <Card {...item} />)
                : "(Cards Not Set)"}
            </Cards>
          </DescriptionVegetables>
        ))}
    </VegetablesContainer>
  );
};

// ===================================================  Card Components ============
const Card = (props) => {
  return (
    <StyledCard>
      <Image>
        <img src={props.imgSrc} alt={props.imageDescription} />
      </Image>
      <motion.button variants={fade}>{props.btnText} </motion.button>
    </StyledCard>
  );
};

// ===================================================  Styled Components ============
const VegetablesContainer = styled(About)`
  text-align: center;
  background: white;
  height: 70vh;
  width: 100%;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  width: 70%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0rem 0;
  position: relative;
  padding: 1rem;

  button {
    background: #ffc0047a;
    position: absolute;
    bottom: 3rem;
    left: 2rem;
    z-index: 100;
    border: none;
    outline: none;
    border-radius: 2rem;
    width: 82%;
    backdrop-filter: blur(1rem);
  }
  img {
    width: 100%;
    height: 250px;
  }
`;

export default Vegetables;
