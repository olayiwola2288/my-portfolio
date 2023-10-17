import { SkillList } from "./SkillList"
import { BsCodeSlash } from "react-icons/bs";
const Skill = () => {
  return (
    <div data-aos="fade-right" className="bg-green-950">
      <div className="text-white bg-green-800 w-[90%] p-2 rounded-md mx-auto text-center my-5 mt-10">
        <div className="text-center justify-center text-3xl gap-3 flex">
          <span className="mt-1">
            <BsCodeSlash />
          </span>
          <span>My Skills</span>
        </div>
        <div className=" mt-2 p-3 m-2">
          <p>
            The skills utilized to manifest the design goes beyond the technical
            skills but also include creativity, technical expertise,
            problem-solving, attention to detail, effective communication,
            adaptability, collaboration, and a keen understanding of user
            experience and aesthetics.
          </p>
        </div>
      </div>

      <div
        id="Skill"
        className="card  text-white text-center grid grid-cols-5 p-10 text-xs"
      >
        {SkillList.map((item, index) => (
          <div className="text-center lg:p-10  mx-auto" key={index}>
            <div className="text-[40px]">{item.icon}</div>

            <h5 className="mt-2">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill