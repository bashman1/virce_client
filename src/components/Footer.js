import React from "react";
//Import Icons
import facebook from "../img/facebook.png";
import linkedIn from "../img/linkedIn.png";
import twitter from "../img/twitter.png";

//Styles 
import { motion } from "framer-motion"
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const [element, controls] = useScroll();
  const twitterUrl = 'https://twitter.com/virce';
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
            <h2>TAMBISA UGANDA LIMITED</h2>
            <p class="mb-5 pl-4 line">Tambiisa (U) Ltd is a leading vanilla processing and export company in Uganda.</p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li class="ftco-animate fadeInUp ftco-animated">
                <a href="https://www.facebook.com/virce">
                  <img src={facebook} alt="guy with a camera" />
                </a>
              </li>
              <li class="ftco-animate fadeInUp ftco-animated"><a href="https://www.linkedin.com/virce"><img src={linkedIn} alt="guy with a camera" /></a></li>
              <li class="ftco-animate fadeInUp ftco-animated"><a href={twitterUrl} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="guy with a camera" /></a></li>
            </ul>
          </Card>

          <Card>
            {/* <h2 className="menu_guy">Menu</h2>
            <ul class="footer_menus">
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Shop</Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">About</Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Journal</Link></li>
              <li class="ftco-animate fadeInUp ftco-animated"><Link href="#">Contact Us</Link></li>
            </ul> */}
          </Card>

          <Card>
            {/* <h2 className="help_title">Help</h2>

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
            </div> */}
          </Card>

          <Card>
            <h2>Have a Questions?</h2>
            <ul className="contact_address">
              <li className="address">
                <span><i class="uil uil-map-marker"></i></span>
                <span>Masaka, Ibanda and Kagadi, Mukono, Fortportal, Mpigi, Mityana, Mubende,  in addition to Rwenzori subregion ie Kasese, Bundibugyo </span>
              </li>
              <li className="address">
                <span><i class="uil uil-map-marker"></i></span>
                <span>P.O BOX 276161 </span>
              </li>
              <li className="address">
                <span><i class="uil uil-phone"></i></span>
                <span>+256-786-248201</span>
              </li>
              <li className="address">
                <span><i class="uil uil-envelope"></i></span>
                <span>info@tambisa.com</span>
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
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  width: 80%;
  margin: 2rem auto 0 auto;
  padding: 2rem 0 0 0;
  grid-gap: 1.5rem;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  overflow: hidden;
   .ftco-footer-social{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
    width: 60%;
    margin: 5rem 0 0 1rem;

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
