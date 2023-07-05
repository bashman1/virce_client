import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import OurClients from "../components/OurClients";
import Vegetables from "../components/Vegetables";
import OurServices from "../components/OurServices";
import Deals from "../components/Deals";
import Testimonies from "../components/Testimonies"
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <OurClients />
      <Vegetables />
      <OurServices />
      <Deals />
      <Testimonies />
    </motion.div>
  );
};

export default AboutUs;
