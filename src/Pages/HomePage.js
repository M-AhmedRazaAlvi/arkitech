import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AboutUs from './AboutUs'
// import ContactUs from './ContactUs'
// import Services from './Services'
// import Projects from './Projects'
// import NavbarApp from '../Components/NavBar';
import Hero from '../Components/Hero';
import ServicesSection from '../Components/ServicesSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />
    </div>
    // <BrowserRouter>
    //   <NavbarApp />
    //   <Routes>
    //     <Route path="/aboutUs" element={<AboutUs />} />
    //     <Route path="/contactUs" element={<ContactUs />} />
    //     <Route path="/service" element={<Services />} />
    //     <Route path="/projects" element={<Projects />} />
    //   </Routes>
    // </BrowserRouter>
  )
}
