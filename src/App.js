import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import NavbarApp from './Components/NavBar';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <NavbarApp/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/service" element={<Services/>} />
          <Route path="/projects" element={<Projects/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
