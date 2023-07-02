import React from "react";
//Import Icons
import tradeFed from "../img/tradeFed.png";

//Styles
import { About, DescriptionServices, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const OurPortfolio = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <DescriptionServices>
        <h2>Our Portfolio</h2>

        <ul>
          <li>All Products</li>
          <li>Brand Design</li>
          <li>
            <span>UI/UX Design</span>
          </li>
          <li>Digital Marketing</li>
          <li>Motion Graphics</li>
        </ul>

        <Cards>
          <Card>
            <img alt="icon" src={tradeFed} />
            <div className="icon">
              <h4 className="card_title">TradeFed | SouthAfrica</h4>
              <p>E commerce site</p>
            </div>
          </Card>

          <Card>
            <img alt="icon" src={tradeFed} />
            <div className="icon">
              <h4 className="card_title">TradeFed | SouthAfrica</h4>
              <p>E commerce site</p>
            </div>
          </Card>

          <Card>
            <img alt="icon" src={tradeFed} />
            <div className="icon">
              <h4 className="card_title">TradeFed | SouthAfrica</h4>
              <p>E commerce site</p>
            </div>
          </Card>
        </Cards>
      </DescriptionServices>
    </Services>
  );
};

const Services = styled(About)`
  text-align: center;
  background: #010101;
  min-height: 100vh;
  margin-top: 0.8rem;
  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
  }
  ul {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    margin: 1rem auto;

    li {
      list-style: none;
      font-size: 1.1rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 0.9rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  margin-top: 4rem;
  flex-basis: 20rem;
  min-height: 17rem;
  overflow: hidden;
  background: #050505;

  border-radius: 20px;

  img {
    width: 70%;
    height: 11rem;
    object-fit: contain;
    margin: 0 auto;
  }
  .icon {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    h4 {
      font-size: 1.5rem;
      width: 100%;
      background: #161515;
      padding: 1rem 1rem 0 1rem;
    }
    p {
      font-size: 1.2rem;
      width: 100%;
      color: #949494;
      background: #161515;
      padding: 0.5rem 1rem 1rem 1.5rem;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      text-align: left;
    }
  }
`;

export default OurPortfolio;
