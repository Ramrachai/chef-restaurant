import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";
import Chef from "../components/Chef";
import Contact from "../components/Contact";
import styled from "styled-components";
import Footer from "../components/Footer";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <WhyUs />
      <Statistics />
      <Testimonial />
      <Chef />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;
