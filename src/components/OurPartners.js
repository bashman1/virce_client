import React, { useEffect, useState } from "react";
//Import Icons

//Styles
import { About, DescriptionTestimonies } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import axios from "axios";
import { base_url } from '../api';

const OurPartners = () => {
    const [ourPartners, setOurPartners] = useState(null);
    const [element, controls] = useScroll();

    useEffect(() => {
        const getOurPartners = async () => {
          const {
            data: { data },
          } = await axios.post(base_url, { postData: "PARTNERSHIPS" });
          setOurPartners(data);
        };
    
        getOurPartners();
      }, []);

    return (
        <Services
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            id="partners"
            ref={element}
        >
             {ourPartners &&
                ourPartners.map((partnerInfo) => (
                    <DescriptionTestimonies key={partnerInfo.heading}>
                         {partnerInfo.heading ?  <h2 className="header_color">{partnerInfo.heading}</h2> : "(Title Not Set)"}
                         {partnerInfo.subtitle ?  <span>{partnerInfo.subtitle}</span> : "(subtitle Not Set)"}
                        
                        {
                          partnerInfo.patnerList && 
                            <Cards>
                            {partnerInfo.patnerList.map((item) => <Card {...item} />)}
                            </Cards>
                         
                        }
                         

                    </DescriptionTestimonies>
             ))}
        </Services>
    );
};

// ===================================================  Card Components ============
const Card = (props) => {
    return (
        <StyledCard>
        <div className="icon">
            <img alt="icon" src={props.patnerImgSrc} />
        </div>
        <div className="text text-center">           
            <p className="name bold">{props.patnerName}</p>
        </div>
    </StyledCard>
    );
  };
const Services = styled(About)`
  text-align: center;
  background: white;
  margin-top:0;

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

const StyledCard = styled.div`
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
            color: rgba(0, 0, 0, 0.8);
        }
        .name{
            padding-bottom: .5rem;
        }
    }
`;


export default OurPartners;
