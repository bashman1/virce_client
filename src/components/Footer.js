import React from "react";
//Import Icons
import facebook from "../img/facebook.png";
import productDesign from "../img/person_2.jpg";

import digitalMarketing from "../img/person_1.jpg";
import gulapay from "../img/product-4.jpg";
import seepug from "../img/product-3.jpg";
import wefarm from "../img/product-2.jpg";
//Styles
import { About } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledFooter>
        <div class="mouse">
          <Link href="#" class="mouse-icon">
            <div class="mouse-wheel"><i class="uil uil-angle-up"></i></div>
          </Link>
        </div>

        <Cards>
          <Card>
            <h2>VEGEFOODS</h2>
            <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#"><img src={facebook} alt="guy with a camera" /></Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#"><img src={facebook} alt="guy with a camera" /></Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#"><img src={facebook} alt="guy with a camera" /></Link></li>
            </ul>
          </Card>

          <Card>
            <h2 className="menu_guy">Menu</h2>
            <ul class="footer_menus">
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Shop</Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">About</Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Journal</Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Contact Us</Link></li>
            </ul>
          </Card>

          <Card>
            <h2 className="help_title">Help</h2>

            <div className="help_guys">
              <ul class="help_list">
                <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Shipping Information</Link></li>
                <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Returns & Exchange</Link></li>
                <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Terms & Conditions</Link></li>
                <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Privacy Policy</Link></li>
              </ul>
              <ul class="help_list">
                <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">FAQs</Link></li>
                <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </Card>

          <Card>
            <h2>Have a Questions?</h2>
            <ul className="contact_address">
              <li className="address">
                <span><i class="uil uil-map-marker"></i></span>
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="address">
                <span><i class="uil uil-phone"></i></span>
                <span>+2 392 3929 210</span>
              </li>
              <li className="address">
                <span><i class="uil uil-envelope"></i></span>
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </Card>
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

const Services = styled(About)`
  text-align: center;
  background: white;
    overflow: visible;

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
  height: 100vh;
  width: 100%;
  position: relative;
  row-gap: 2rem;


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

  .ftco-footer-social{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
    width: 60%;
    margin-top: 5rem;

    .ftco-animated{
      img{
        width: 3rem;
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
    margin: 0 auto;
    p{
      font-size: 14px;
      color: #000000;
    }
  }
`

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

  h2 {
    font-size: 16px;
    font-weight: bolder;
    color: #000000;
    padding:0px;
    }

    .menu_guy,.help_title{
      text-align: left;
    margin-left: 5rem;
    }
    p {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 14px;
      color: #000000;
      padding:1rem;
      text-align: left;
    }
    .help_guys{
      display:flex;
      justify-content:space-around;
      align-items: center;

      .help_list{
        display: flex;
        align-items:flex-start;
        justify-content: center;
        flex-direction:column;
        row-gap:1rem;
      }
    }
    .contact_address{
      display: flex;
      align-items: flex-start;
      justify-content: center;
      row-gap: 1rem;
      flex-direction:column;
      padding-left:4rem;

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
