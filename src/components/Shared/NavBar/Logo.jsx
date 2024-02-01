import React from "react";
import imgLogo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="cursor-pointer">
      <img
        src={imgLogo}
        className="hidden md:block"
        width={100}
        height={100}
        alt=""
      />
    </Link>
  );
};

export default Logo;
