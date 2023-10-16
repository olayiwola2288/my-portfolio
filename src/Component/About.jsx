import  { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <section id="About" data-aos="fade-up">
      <h1 className="lg:ms-32 ms-10 mt-20 text-green-950  lg:text-3xl text-3xl">
        ABOUT ME
      </h1>
      <p className="lg:ms-32 ms-10 text-green-950  lg:text-5xl text-3xl font-bold">
        Overview
      </p>
      <p className="lg:ms-32 ms-5 text-green-950 sm:mt-5 font-normal">
        I'm a skilled web developer with experience in JavaScript, and expertise
        in frameworks <br /> like React and Express I'm a quick learner and
        collaborate closely with clients <br /> to create efficient, scalable,
        and user-friendly solutions that solve real-world problems.
      </p>
    </section>
  );
};

export default About;
