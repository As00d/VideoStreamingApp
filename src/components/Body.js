import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

function Body() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet/>
    </div>
  );
}

export default Body;
