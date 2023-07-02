import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import OurClients from "../components/OurClients";
import Vegetables from "../components/Vegetables";
import OurServices from "../components/OurServices";
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
    </motion.div>
  );
};

export default AboutUs;
