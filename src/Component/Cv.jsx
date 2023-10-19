import cv from '../assets/Olayiwola Salaudeen CURRICULUM VITAE .pdf'
import Aos from "aos";
import { useEffect } from "react";
const Cv = () => {
      useEffect(() => {
        Aos.init({
          duration: 3000,
        });
      }, []);
  return (
    <div data-aos="fade-up">
      <div className="mx-auto text-center mt-10 font-bold ">
        <a
          className="bg-white p-2 rounded"
          href={cv}
          download
        >
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}

export default Cv