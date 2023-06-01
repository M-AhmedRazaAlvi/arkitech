import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Services from './Services'
import Projects from './Projects'
import NavbarApp from '../Components/NavBar';

export default function HomePage() {
  return (
    <BrowserRouter>
    <NavbarApp/>
      <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/service" element={<Services/>} />
          <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}
