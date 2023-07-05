import React from "react";
//Import Icons
import brandDesign from "../img/product-5.jpg";
import productDesign from "../img/product-5.jpg";

import digitalMarketing from "../img/product-1.jpg";
import gulapay from "../img/product-4.jpg";
import seepug from "../img/product-3.jpg";
import wefarm from "../img/product-2.jpg";
//Styles
import { About, DescriptionProducts } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const OurServices = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <DescriptionProducts>
        <span class="subheading">Featured Products</span>
        <h2>Our Products</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={brandDesign} />
              <h4 className="card_title">Brand Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={productDesign} />
              <h4 className="card_title">Product Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={digitalMarketing} />
              <h4 className="card_title">Brand Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={gulapay} />
              <h4 className="card_title">Brand Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={seepug} />
              <h4 className="card_title">Brand Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={productDesign} />
              <h4 className="card_title">Product Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={digitalMarketing} />
              <h4 className="card_title">Brand Design</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={wefarm} />
              <h4 className="card_title">Bell Pepper</h4>
              <p>
                20,000 Ugx
              </p>
            </div>
          </Card>
        </Cards>
      </DescriptionProducts>
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

const Card = styled.div`
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
      margin:1rem auto;
    }
    h4 {
     font-size: 14px;
      margin-bottom: 5px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: "Poppins", Arial, sans-serif;
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
