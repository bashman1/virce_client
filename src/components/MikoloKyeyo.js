import React from "react";
import home1 from "../img/productDesignSection.png";
import {
  AboutProductDesign,
  DescriptionProductDesign,
  Hide,
  EllipseProductDesign,
  EllipseMikolo,
  ProductDesignBottom,
} from "../styles";
//Framer Motion

import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MikoloKyeyo = () => {
  const { pathname } = useLocation();
  return (
    <ProductDesignBottom>
      <div className="mikolo">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
        <EllipseMikolo />
        <div className="mikolo_content">
          <p className="sub_title">Introducing</p>
          <h2>Mikolo</h2>
          <Link to="/get-qoute">
            <motion.button className="get_qoute" variants={fade}>
              Explore more
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="kyeyo">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
        <EllipseMikolo />
        <div className="kyekyo_content">
          <p className="sub_title">Introducing</p>
          <h2>Brand Kyekyo</h2>
          <Link to="/get-qoute">
            <motion.button className="get_qoute" variants={fade}>
              Explore more
            </motion.button>
          </Link>
        </div>
      </div>
    </ProductDesignBottom>
  );
};

//Styled Components

export default MikoloKyeyo;
