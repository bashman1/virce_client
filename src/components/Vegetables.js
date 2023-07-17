import React, { useState, useEffect } from 'react';
//Import Icons
import serviceCops from "../img/dry-vanilla.jpg";
// import neptune from "../img/category-3.jpg";
import { motion } from "framer-motion";
import schoolpay from "../img/2018_11_08-Papua-New-Guinea-r3-2357.jpg";
import category4 from "../img/ginger-plant-compressed.webp";
//Styles
import { About, DescriptionVegetables, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
import axios from "axios";
import { base_url } from '../api';

const Vegetables = () => {
    const [element, controls] = useScroll();

    const [ourCategories, setOutCategories] = useState(null)

    useEffect(() => {

        const getOurService = async () => {
            const { data: { data } } = await axios.post(base_url, { postData: "CATEGORIES" })
            setOutCategories(data);

        }

        getOurService()
    }, [])

    return (
        <VegetablesContainer
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            {ourCategories &&
                ourCategories.map(categoryInfo =>
                    <DescriptionVegetables>
                        {categoryInfo.heading ? <h2>{categoryInfo.heading}</h2> : "(Title Not Set)"}

                        <Cards>
                            {categoryInfo.cards ?
                                categoryInfo.cards.map(item => <Card {...item} />)
                                : "(Cards Not Set)"}

                        </Cards>

                    </DescriptionVegetables>)
            }
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
    )
}

// ===================================================  Styled Components ============
const VegetablesContainer = styled(About)`
  text-align: center;
  background: white;
  height: 100%;
  width:100%;


`;

const Cards = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
  margin: 2rem;
  position:relative;

  button{
    background: #82ae46;
    position:absolute;
    bottom:0%;
    left: 0%;
    z-index:100;
    border:none;
    outline:none;
  }
  img{
    width: 100%;
    height: 250px;
    }
 
`;

export default Vegetables;
