import React from "react";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Categories />
      <Rooms />
    </div>
  );
};

export default Home;
