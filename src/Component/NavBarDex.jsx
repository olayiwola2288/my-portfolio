import { info } from "./NavList";
import { Link } from "react-scroll";
import img from "../../src/assets/WhatsApp Image 2023-10-16 at 11.58.25_34eeb5d1.jpg";

const NavBarDex = () => {
  return (
    <div className="hidden lg:block bg-green-900">
      <div className="flex justify-between me-32">
        <div>
          <img src={img} alt="" className="w-[75px] rounded-full ms-20 py-2" />
        </div>
        <ul className="flex items-center justify-center gap-[2rem] ">
          {info.map((item, index) => (
            <li key={index}>
              <Link
                smooth
                to={item.link}
                key={item.name}
                className=" text-white cursor-pointer hover:bg-btn hover:text-lightBg text-[16px] hover:text-lime-400
          w-[100px] text-center rounded-md"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarDex;
