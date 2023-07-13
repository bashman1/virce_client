import React from "react";
//Import Icons
import brandDesign from "../img/person_1.jpg";
import productDesign from "../img/person_2.jpg";

import digitalMarketing from "../img/person_1.jpg";
//Styles
import { About, DescriptionTestimonies } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const Testimonies = () => {
    const [element, controls] = useScroll();
    return (
        <Services
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <DescriptionTestimonies>
                <span class="subheading">Funding Partners</span>
                <h2 className="bigger">Our partners</h2>
                {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p> */}

                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={brandDesign} />
                        </div>
                        <div class="text text-center">
                            <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p class="name">Garreth Smith</p>
                            <span class="position">System Analyst</span>
                        </div>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img alt="icon" src={productDesign} />
                        </div>
                        <div class="text text-center">
                            <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <p class="name">Garreth Smith</p>
                            <span class="position">Marketing Manager</span>
                        </div>
                    </Card>

                    <Card>
                        <div className="icons-container">
                            <div className="icon">
                                <img alt="icon" src={digitalMarketing} />
                            </div>
                            <div class="text text-center">
                                <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p class="name">Garreth Smith</p>
                                <span class="position">Interface Designer</span>
                            </div>
                        </div>
                    </Card>
                </Cards>
            </DescriptionTestimonies>
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
  grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
  width: 80%;
  margin: 0 auto;
  grid-gap: 1.5rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  overflow: hidden;

  /* Inside auto layout */
  .icon {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin:1rem auto;
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
        .icons-container{
            
        }
    }
    .text{
        width: 100%;
        padding: 1rem;
        p{
            width: 100%;
            font-size: 15px;
            line-height: 1.8;
            font-weight: 400;
            position: relative;
            border-left: 1px solid #e6e6e6;
            color: rgba(0, 0, 0, 0.8);
        }
        .name{
            padding-bottom: .5rem;
        }
    }
`;


export default Testimonies;
