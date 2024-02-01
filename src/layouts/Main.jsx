import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-28 pb-20">
        <h2>Time: 03:04:55</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
