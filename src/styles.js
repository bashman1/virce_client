import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  color: white;
  position: relative;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const AboutProductDesign = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  color: white;
  position: relative;
  margin-top: 1rem;
  width: 100%;
  position: relative;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const DescriptionAbout = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -70%);
  z-index: 3;
  width: 70%;
  text-align: center;
  height: 100vh;

  h2 {
    /* line-height: 92.2%; */
    text-align: center;
    width: 100%;
    transform: none;
    color: #fff;
    line-height: 1.3;
    font-weight: 600;
  }
  h3 {
    color: #fff;
  }
  button {
    padding: 10px 31px;
    border: none !important;
    background: #dfb207;
    border-radius: 2rem;
    margin-top: 2rem;

    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #000000;
    a {
      color: #fff;
    }
  }
  @media (max-width: 1300px) {
    padding: 0;

    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  width: 60%;
  height: 70%;
  border-radius: 50%;

  background: #01010147;
  filter: blur(50px);
  box-shadow: 0 0 400px #010101;
  transform: translate(-50%, -40%);
  z-index: 2;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const DescriptionOurClients = styled.div`
  flex: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: lighter;
    color: black;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const DescriptionVegetables = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  h2 {
    color: black;
  }
`;
export const DescriptionProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-top: 5rem;

  .subheading {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-style: italic;
    color: #82ae46;
  }

  h2 {
    position: relative;
    font-size: 60px;
    font-weight: 800;
    color: #000000;
  }
  p {
    padding: 0 0 4rem 0;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const DescriptionTestimonies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-top: 5rem;

  .subheading {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-style: italic;
    color: #82ae46;
  }

  h2 {
    position: relative;
    font-size: 70px;
    font-weight: 800;
    color: #000000;
  }
  p {
    padding: 0 0 4rem 0;
    width: 50%;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const DescriptionServices = styled.div`
  flex: 1;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const DescriptionMission = styled.div`
  flex: 1;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const DescriptionProductDesign = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -10%);
  z-index: 3;
  width: 50%;
  text-align: center;
  overflow: hidden;

  h2 {
    line-height: 92.2%;
    font-weight: bolder;
    width: 100%;
    font-size: 4rem;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 92.2%;
    height: 32px;
    text-align: center;
    padding: 1rem 0 !important;
    color: #d9d9d9;
  }
  div.btns_container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    padding: 0px;
    gap: 0.5rem;

    a {
      display: block;
      width: 12rem;
    }
  }
  button {
    padding: 4px 25px;
    border: none;
    border: 2px solid #4f4f4f !important;
    border-radius: 12px;
    margin-top: 2rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.15rem;
    text-align: center;
    color: #dfb207;
    white-space: nowrap;
    width: 100%;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const ImageProductDesign = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  overflow: hidden;
  width: 97%;
  margin: 0 auto;
  position: absolute;
  top: -20%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EllipseProductDesign = styled.div`
  position: absolute;
  top: -5%;
  left: 50%;
  width: 800px;
  height: 800px;
  height: 70%;
  border-radius: 50%;

  background: #010101;
  filter: blur(150px);
  box-shadow: 0 0 500px #0c0c0c;
  transform: translate(-50%, -40%);
  z-index: 2;
`;

export const EllipseMikolo = styled.div`
  position: absolute;
  top: -5%;
  left: 50%;
  width: 800px;
  height: 800px;
  height: 70%;
  border-radius: 50%;

  background: #010101;
  filter: blur(150px);
  box-shadow: 0 0 500px #0c0c0c;
  transform: translate(-50%, -40%);
  z-index: 2;
`;

// productDesign
export const ProductDesignBottom = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  flex-direction: row;
  align-items: center;
  width: 97%;
  height: 97%;
  margin: 1.2rem auto 1.2rem auto;

  .mikolo {
    position: relative;
    overflow: hidden;
  }

  .kyeyo {
    position: relative;
  }
  .mikolo_content,
  .kyekyo_content {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    z-index: 2;
    text-align: center;

    p {
      padding: 0.7rem 0 !important;
      font-style: normal;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 92.2%;

      text-align: center;

      color: #d9d9d9;
    }

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 2.3rem;
      line-height: 92.2%;
      padding-bottom: 2rem;

      /* identical to box height, or 74px */
      text-align: center;

      color: #ffffff;
    }
    button {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 92.2%;
      text-align: center;
      border: 2px solid #4f4f4f;
      border-radius: 12px;
      color: #dfb207;
      padding: 0.6rem 1rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Image = styled(motion.div)`
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ImageNav = styled(motion.div)`
  z-index: 2;
  overflow: hidden;
  height: 100vh;
  width: 100vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyleFooter = styled.div`
  height: 60vh;
  width: 100%;
  background: #000000;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
