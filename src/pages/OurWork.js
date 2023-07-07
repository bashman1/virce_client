import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/bg_1.jpg";
import theracer from "../img/about.jpg";
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer";
import PartnerShips from "../components/PartnerShips";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <Hide>
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          <div class="about_title">
            <p class="breadcrumbs">
              <span class="mr-2"><Link to="/">Home</Link></span>
              <span>About us</span>
            </p>
            <h1 class="mb-0 bread">About us</h1>
          </div>
        </Hide>
      </Movie>

      <StyledVegie ref={element} variants={fade} animate={controls} initial="hidden">

        <VegieLeft>
          <img src={theracer} alt="theracer" />
          <div class="mouse">
            <Link href="#" class="mouse-icon">
              <div class="mouse-wheel"><i class="uil uil-play"></i></div>
            </Link>
          </div>
        </VegieLeft>

        <StyledVegieRight>
          <div class="vegie_right_header">
            <h2 class="mb-4">Welcome to Vegefoods an eCommerce website</h2>
          </div>

          <div class="vegie_right_text">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            <p>
              <Link to="/shop" class="btn btn-primary">
                <motion.button variants={fade}>Shop now</motion.button>
              </Link>
            </p>
          </div>
        </StyledVegieRight>
      </StyledVegie>

      <Newsletter />
      <PartnerShips />
      <Footer />

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;  
  }
`;

const StyledVegie = styled(motion.div)`
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh;
  overflow:hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const VegieLeft = styled.div`
  position: relative;
  height: inherit;
  flex:1;

  .mouse{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);

    .mouse-icon{
      width: 100px;
      height: 100px;
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
`;

const StyledVegieRight = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  padding:3rem;

  .vegie_right_header{
    margin:1.5rem 0;

    h2{
      font-size: 40px;
      font-weight: 800;
      color: #000000;
    }
  }
  .vegie_right_text{
    p{
      margin-bottom: 1rem;

      a{
        button{
          background: #82ae46;
          border: 1px solid #82ae46;
          color: #fff;
          border-radius: 2rem;
        }
      }
    }

  }
`
const Hide = styled.div`
  overflow: hidden;
  position:relative;

  .about_title{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    p{
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 3px;
      margin-bottom: 0;
      z-index: 99;
      font-weight: 300;
      color: white;
      padding: 0;

      .mr-2{        
        margin-right: 0.5rem !important;
        a{
          color: white;
        }
      }
      span{
          color: white;
      }
    }

    h1{
      font-weight: 800;
      color: #fff;
      font-size: 30px;
      font-family: "Poppins", Arial, sans-serif;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
