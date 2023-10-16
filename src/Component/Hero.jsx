import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import img from "../../src/assets/WhatsApp Image 2023-10-16 at 11.58.25_34eeb5d1.jpg";

const Hero = () => {
  return (
    <div className="lg:flex">
      <div className="lg:flex gap-8">
        <div data-aos="fade-right">
          <h1 className="lg:ms-32 font-bold mt-28 lg:mt-36 ms-10 text-green-950 lg:text-7xl text-5xl sm:mt-5">
            <span className="text-green-950">Hello!, 👋</span> I'm <br />
            <span className="text-lime-700">OLAYIWOLA SALAUDEEN</span>
          </h1>
          <div className="lg:ms-32 ms-10 mt-5 text-green-950 lg:text-5xl text-2xl">
            <h2 className="">
              An Expert in{" "}
              <TypeAnimation
                sequence={[
                  "Front-End",
                  500,
                  "Back-End",
                  500,
                  "CSS",
                  500,
                  "Bootstrap",
                  500,
                  "MERN Stack",
                  500,
                  "Express JS",
                  500,
                  "JavaScript",
                  500,
                  "React JS",
                  500,
                  "HTML",
                  500,
                  "Next js",
                  500,
                ]}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
        <div className="mt-20 lg:mt-24 mx-5 md:mx-auto">
          <img src={img} alt="" className="w-[400px] rounded-ss-[40px] rounded-ee-[40px] rounded-se-md rounded-es-md mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
