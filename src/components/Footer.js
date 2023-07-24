import React, { useEffect, useState } from "react";
//Import Icons
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
// api
import axios from "axios";
import { base_url } from "../api";

//Styles 
import { motion } from "framer-motion"
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const [element, controls] = useScroll();
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const getFooter = async () => {
      const {data:{data:{cards}}}= await axios.post(base_url, { postData: "FOOTER" });
  
      setFooter(prev => cards);
    };

    getFooter();
  }, []);
  
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledFooter>
        {/* <div className="mouse">
          <Link href="#" className="mouse-icon">
            <div className="mouse-wheel"><i className="uil uil-angle-up"></i></div>
          </Link>
        </div> */}

        <Cards>
          {footer && footer.map(card =>
            <Card>
            <h2>{card.title}</h2>

            {card.description &&  <p className="mb-5 pl-4 line">{card.description}</p> }
           
            {card.socialMediaLinks &&
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href={ `${card.socialMediaLinks.facebook}`}>
                    <img src={facebook} alt="guy with a camera" />
                  </a>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href={ `${card.socialMediaLinks.linkedin}`}>
                    <img src={facebook} alt="guy with a camera" />
                  </a>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href={ `${card.socialMediaLinks.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="guy with a camera" /></a></li>
               
              </ul>
            }

            {card.phone && 
              <p className="address">
              <span><i className="uil uil-phone"></i></span>
              <span>{card.phone}</span>
            </p> 
            }

            {card.email && 
              <p className="address">
              <span><i className="uil uil-phone"></i></span>
              <span>{card.email}</span>
            </p> 
            }

            {card.contactDetails && 
            <ul className="contact_address">
                {card.contactDetails.map(addr =>
                   <li className="address">
                   <span><i className="uil uil-map-marker"></i></span>
                   <span>{addr} </span>
                 </li>
                )}
            </ul>
            
            }
            
          </Card>
            )}
        </Cards>

        <div className="copy_right">
          <p>
            Copyright ©{(new Date().getFullYear())} All rights Reserved. Powered by Virce Corporation through Virce Core.
          </p>
        </div>
      </StyledFooter>
    </Services>
  );
};

const Services = styled(motion.div)`
  text-align: center;
  background: white;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  position: relative;

    

  h2 {
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
    font-weight: bolder;
  }
  
`;

const StyledFooter = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;


  .mouse{
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
    z-index: 99;

    .mouse-icon{
      width: 60px;
      height: 60px;
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      background: #82ae46;
      cursor: pointer;
      position: relative;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .mouse-wheel{
        i{
          font-size: 3rem;
          color: white;
        }
      }
    }
  }

 
  .footer_menus{
     display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    row-gap: 1rem;
    margin-left: 5rem;
  }
  .copy_right{
    border-top:1px solid rgba(0,0,0,.1);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    p{
      font-size: 14px;
      color: hsla(220, 100%, 20%, .6);
      font-weight: bolder;
    }
  }
`

const Cards = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
  width: 80%;
  margin: 2rem auto 0 auto;
  padding: 2rem 0 0 0;
  grid-gap: 1.5rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 20rem;
  overflow: hidden;

   .ftco-footer-social{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 1.5rem;
    width: 60%;
    margin: 5rem auto 0 1rem;

    .ftco-animated{
      img{
        width: 3rem;
      }
    }
  }

  h2 {
    font-size: 16px;
    font-weight: bolder;
    color: #000000;
    padding:0px;
    text-align: left;
    }

  
    p {
      margin-top: 0;
      font-size: 14px;
      color: #000000;
      padding: .5rem 0;
      text-align: left;
      display: flex;
      row-gap: 1rem;
    }
    .address{
      display: flex;
      padding: 0.5rem 0;
      column-gap: 1rem;
    }
    .contact_address{
      display: flex;
      align-items: flex-start;
      justify-content: center;
      row-gap: 1rem;
      flex-direction:column;

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 1rem;
         
        span{
          font-size: 14px;
          color: #000000;
          text-align: left;
        }
      }
    }
`;


export default Footer;
