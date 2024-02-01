import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Container from "../Container";
import Card from "./Card";
import Loader from "../Shared/Loader/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setLoading(false);
        setRooms(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <h1>Rooms{rooms.length}</h1>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
        {rooms.map((item, index) => (
          <Card key={index} room={item} />
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
