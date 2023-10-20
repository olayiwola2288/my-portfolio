import { useEffect } from "react";
import img from "../../src/assets/team.png";

import axios from "axios";
import Aos from "aos";
import { useState } from "react";

const Contact = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  let endpoint = "http://localhost:5500/help";
  const get = () => {
    let data = { fullName, email, organization, message };
    console.log(data);
    axios
      .post(endpoint, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div data-aos="flip-up" id="Contact" className="bg-green-950 lg:flex">
      <div className="grid lg:grid-cols-2">
        <div className=" mt-10 lg:ms-28 ms-8">
          <div className="text-white">CONTACT ME</div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="">
              Fullname
            </label>{" "}
            <br />
            <input
              className="border w-full rounded"
              type="text"
              onChange={(e) => setFullname(e.target.value)}
              value={fullName}
              name="fullName"
            />
          </div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="">
              Email
            </label>{" "}
            <br />
            <input
              className="w-full rounded"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="">
              Organization
            </label>{" "}
            <br />
            <input
              className="w-full rounded"
              type="text"
              onChange={(e) => setOrganization(e.target.value)}
              value={organization}
              name="organization"
            />
          </div>
          <div className="my-2 w-80">
            <label className="text-white" htmlFor="">
              Message
            </label>{" "}
            <br />
            <textarea
              className="w-full rounded"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            onClick={get}
            className="text-white w-80 rounded font-bold bg-red-500 p-2"
          >
            Send Message
          </button>
        </div>
        <div>
          <img src={img} alt="" width={700} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
