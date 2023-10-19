import { AiFillGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
const ContactButtons = () => {
  return (
    <div>
      {" "}
      <div className="lg:mt-32 lg:flex lg:flex-col sm:flex flex-row space-y-5 left-5 bottom-5 md:bottom-1/2 bg-gray-200 p-3 rounded fixed z-[1000]">
        <div>
          {" "}
          <a href="https://github.com/olayiwola2288">
            <AiFillGithub className="text-dark " size={36} />
          </a>
        </div>

        <div>
          {" "}
          <a href="https://www.messenger.com/t/696213910773745">
            <FaFacebookMessenger className="text-dark " size={36} />
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
