import React from "react";
//Import Icons
import tradeFed from "../img/tradeFed.png";

//Styles
import { About, DescriptionMission, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const OurMilestones = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <DescriptionMission>
        <h2>Our Milestones</h2>

        <Cards>
          <Card>
            <h1>8</h1>
            <p>Happy Clients</p>
          </Card>

          <Card>
            <h1>100+</h1>
            <p>Projects Completed</p>
          </Card>

          <Card>
            <h1>10</h1>
            <p>Jobs Created</p>
          </Card>
          <Card>
            <h1>15</h1>
            <p>Internships Completed</p>
          </Card>
          <Card>
            <h1>1000+</h1>
            <p>Cups of Coffee</p>
          </Card>
        </Cards>
      </DescriptionMission>
    </Services>
  );
};

const Services = styled(About)`
  text-align: center;
  background: #010101;
  height: 50vh;
  margin-top: 0.8rem;
  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
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
  flex-basis: 15rem;
  min-height: 5rem;
  overflow: hidden;

  h1 {
    font-size: 4rem;
    font-weight: bolder;
  }
  p {
    font-size: 1rem;
    width: 100%;
    color: #949494;
    padding: 1rem 0;
  }
`;

export default OurMilestones;
