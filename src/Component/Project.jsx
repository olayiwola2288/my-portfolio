import  { useEffect } from "react";
import { ProjectList } from "./ProjectList";
import Aos from "aos";
const Project = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div id="projects" className="text-green-950 ms-10 my-10">
        <p className="text-xl">MY PROJECTS</p>
        <p className="text-6xl font-bold">Overview.</p>
        <p className="font-bold mt-2">
          Below projects showcases my work and experience in building a real
          world applications. <br /> Each work is briefly describe with links to
          code repository and demo links. The projects <br /> reflect my ability
          to work with different technologies without compromising quality in my
          work.
        </p>
      </div>
      <div
        data-aos="flip-left"
        className="card text-white lg:ms-10 ms-6 lg:grid grid-cols-3 gap-5 mb-10"
        id="Project"
      >
        {ProjectList.map((item, index) => (
          <div
            className="text-white p-4 w-80 bg-gray-900 rounded-2xl border border-gray-900  mt-10"
            key={index}
          >
            <img className="rounded-2xl" src={item.image} alt="" width={320} />
            <p className="text-center font-bold mt-2 text-2xl">{item.title}</p>

            <p className="mt-2 w-[300px]">{item.content}</p>

            <div className="lg:mt-2 p-4">
              <a
                className="bg-white p-2 rounded text-gray-900"
                href={item.gitlink}
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
