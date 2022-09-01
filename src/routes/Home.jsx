import React from 'react'
import Navbar from "../components/navbar"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import Testimonials from "../components/testimonials"
import Faq from "../components/faq"
import Contact from "../components/Contact"
import Footer from "../components/footer"
import "../styles/homeStyles.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home