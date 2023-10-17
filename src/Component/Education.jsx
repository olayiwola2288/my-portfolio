import { education } from "./EducationList"
import  { useEffect } from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import Aos from "aos";
const Education = () => {
    useEffect(() => {
      Aos.init({
        duration: 3000,
      });
    }, []);
  return (
    <>
      <section data-aos="flip-down" className="">
        <div
          id="education"
          className="flex  ms-20 gap-5 mb-10 lg:ms-[650px] mt-10 "
          data-aos="flip-down"
        >
          <div className="text-green-950 text-4xl text-center">Education</div>
          <div className="text-green-950 mt-1">
            <RiGraduationCapLine size={35} />
          </div>
        </div>
        <div className="text-gray-600 lg:flex my-5 text-center ">
          {education.map((item, index) => (
            <div id="Education" className="lg:mx-auto rounded shadow lg:px-4 lg:pb-5 mx-5 hover:bg-slate-200 py-3 mt-2 " key={index}>
              <img
                className="img-fluid mx-auto lg:mt-5 mt-5 mb-2"
                width={50}
                src={item.img}
                alt=""
              />
              <h1 className="font-bold">{item.School}</h1>
              <p className="font-bold">{item.Programme}</p>
              <p className="font-bold">{item.Year}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Education