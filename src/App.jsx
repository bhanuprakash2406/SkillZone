import React, { useEffect, useState } from 'react'
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Course from "./Components/Course";
import Mentor from './Components/Mentor';
import Group from './Components/Group';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer'

const App = () => {

  const [active, setActive] = useState();
  
   useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
  
        sections.forEach((section) => {
          const top = window.scrollY;
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;
          const id = section.getAttribute("id");
  
          if (top >= offset && top < offset + height) {
            setActive(id);
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div>
      <Nav active={active} />
      <Home />
      <Course />
      <Mentor />
      <Group />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App