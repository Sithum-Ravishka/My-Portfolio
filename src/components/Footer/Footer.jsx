import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="contactme">
          <span>Contact Me</span>
          <span>Discuss a project or just want to say hi? </span>
            <span>My Inbox is open for all.</span>
          <span>076-8367334</span>
          <span>sithumravishka1@gmail.com</span>
        </div>
        <div className="scoMeadia">
        <div className="f-icons">
          <a href="https://www.instagram.com/sithum_ravishka/">
            <Insta color="#fb3958" size={"2.5rem"} />
          </a>
          <a href="https://www.facebook.com/people/Sithum-Ravishka/100008639329023/">
            <Facebook color="#4267B2" size={"2.5rem"} />
          </a>
          <a href="https://github.com/Sithum-Ravishka">
            <Gitub color="black" size={"2.5rem"} />
          </a>
        </div>
        <div className="f-creator">
          <span >Copyright ©2021-2022, All Rights Reserved | Website is made with by <span>Sithum Ravishka</span></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
