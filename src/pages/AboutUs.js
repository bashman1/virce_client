import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import OurClients from "../components/OurClients";
import Vegetables from "../components/Vegetables";
import OurServices from "../components/OurServices";
import Deals from "../components/Deals";
import Footer from "../components/Footer";
import Testimonies from "../components/Testimonies"
// import Newsletter from "../components/Newsletter"

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
<<<<<<< HEAD
      <Certification />
=======
      {/* <Newsletter /> */}
>>>>>>> 4b1a134b557e5340a59ae8dad5feb5011a3cb271
      <Footer />
    </motion.div >
  );
};

export default AboutUs;
