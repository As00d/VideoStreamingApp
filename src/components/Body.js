import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

function Body() {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default Body;
