import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/bg_1.jpg";
import nuts from "../img/Image_5dd97b0f-2cfe-425f-bce4-41eb30ba54f9.webp";
import Footer from "../components/Footer";
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

const ContactUs = () => {
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
      </motion.div>

      <Movie>
        <Hide>
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          <div class="about_title">
            <p class="breadcrumbs">
              <span class="mr-2"><Link to="/">Home</Link></span>
              <span>Contact Us</span>
            </p>
            <h1 class="mb-0 bread">Contact Us</h1>
          </div>
        </Hide>
      </Movie>

      <StyledContact ref={element} variants={fade} animate={controls} initial="hidden">
        <ContactAddress>
          <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
          <p><span>Phone:</span> <Link href="tel://1234567920">+ 1235 2355 98</Link></p>
          <p><span>Email:</span> <Link href="mailto:info@yoursite.com">info@yoursite.com</Link></p>
          <p><span>Website</span> <Link href="#">yoursite.com</Link></p>

        </ContactAddress>

        <ContactForm ref={element} variants={fade} animate={controls} initial="hidden">

          <GoogleMap>
            <Hide>
              <motion.img variants={photoAnim} src={nuts} alt="Gnuts" />
            </Hide>
          </GoogleMap>

          <StyledForm>
            <form action="#" class="bg-white p-5 contact-form">
              <div class="form-group">
                <h2>Talk To Us</h2>
              </div>

              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
              </div>
            </form>
          </StyledForm>

        </ContactForm>
      </StyledContact>

      <Footer />

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  background: #f7f6f2 !important;
  
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

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  row-gap:5rem;
  min-height:100vh;
  overflow:hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const ContactForm = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:100vh;
  overflow:hidden;
  width:100%;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const GoogleMap = styled.div`
  position: relative;
  height: inherit;
  flex:1;

  img{
    border-radius: 1.5rem;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  padding:1.5rem 3rem;
  background:white;
  border-radius: 0rem 1rem 1rem 0rem;

  .form-group {
    margin-bottom: 1.5rem;
    h2{
       color: #000000 !important;
       text-align:center;
       font-weight:bolder;
    }
    .form-control {
      height: 52px !important;
      background: #fff !important;
      color: #000000 !important;
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      border-radius: 1rem;
    }

    textarea.form-control {
      height: inherit !important;
    }
    .btn.btn-primary {
      background: #82ae46;
      border: 1px solid #82ae46;
      color: #fff;
      border-radius: 30px;
      box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
      padding:1rem 3rem 1rem 0rem;
      width: 50%;
    }
  }
  
`
const ContactAddress = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  column-gap: 2rem;

  p{
    background: #fff;
    padding: 2rem;
    flex:1;
    height: 10rem;

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


const Hide = styled.div`
  overflow: hidden;
  position:relative;

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


export default ContactUs;
