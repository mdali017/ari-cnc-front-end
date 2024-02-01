import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title={"Valuvana Bali - owl Bamboo House"}
        subtitle={"Sideman Indonesia"}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full"
          src="https://images.pexels.com/photos/2387917/pexels-photo-2387917.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
