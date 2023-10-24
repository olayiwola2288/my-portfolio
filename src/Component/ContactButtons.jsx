import { AiFillGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import {BiLogoWhatsapp} from "react-icons/bi";
const ContactButtons = () => {
  return (
    <div>
      {" "}
      <div className="lg:mt-32  space-y-5 left-5 bottom-5  bg-gray-200 p-3 rounded fixed z-[1000]">
        <div>
          {" "}
          <a href="https://github.com/olayiwola2288">
            <AiFillGithub className="text-dark " size={36} />
          </a>
        </div>

        <div>
          {" "}
          <a href="https://wa.me/2348168863456">
            <BiLogoWhatsapp className="text-dark " size={36} />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/home">
            <RiTwitterXLine className=" text-dark" size={36} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;
