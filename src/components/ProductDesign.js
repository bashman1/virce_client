import React from "react";
import home1 from "../img/productDesignSection.png";
import {
  AboutProductDesign,
  DescriptionProductDesign,
  Hide,
  EllipseProductDesign,
  ImageProductDesign,
  ProductDesignBottom,
} from "../styles";
//Framer Motion

import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDesign = () => {
  const { pathname } = useLocation();
  return (
    <AboutProductDesign>
      <DescriptionProductDesign>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Product Design</motion.h2>
          </Hide>
          <Hide>
            <motion.p variants={titleAnim}>
              created for the modern business
            </motion.p>
          </Hide>
        </motion.div>
        <div className="btns_container">
          <Link to="/explore-more">
            <motion.button variants={fade}>Explore more</motion.button>
          </Link>
          <Link to="/get-qoute">
            <motion.button className="get_qoute" variants={fade}>
              Get Quote
            </motion.button>
          </Link>
        </div>
      </DescriptionProductDesign>

      <ImageProductDesign>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </ImageProductDesign>

      <EllipseProductDesign></EllipseProductDesign>
  </AboutProductDesign>
  );
};

//Styled Components

export default ProductDesign;
