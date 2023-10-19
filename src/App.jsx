import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import NavBarDex from "./Component/NavBarDex";
import { FaBars } from "react-icons/fa";
import Nav from "./component/Nav";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Card from "./Component/Card";
import Skill from "./Component/Skill";
import Education from "./Component/Education";
import Cv from "./Component/Cv";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./index.css";
import image1 from "./assets/WhatsApp Image 2023-10-16 at 11.58.25_34eeb5d1.jpg";
import ContactButtons from "./Component/ContactButtons";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="body" className="">
        <div className="bg-lightBg fixed w-full top-0 z-[100000] ">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <NavBarDex />
          </div>
        </div>
        <div className="text-green-200 cursor-pointer text-[1rem] lg:hidden transition duration-[0.8s]">
          <Nav isOpen={isOpen} handleClose={toggleIsOpen} />
          <div className="flex lg:block justify-between bg-green-800 w-full fixed z-50">
            <img
              src={image1}
              alt=""
              className="w-[65px] lg:hidden rounded-full my-4 ms-5"
            />
            <FaBars onClick={toggleIsOpen} className="w-10 my-auto" />
          </div>
        </div>
        <ContactButtons />
        <Hero />
        <About />
        <Card />
        <Skill />
        <Education />
        <Cv />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
