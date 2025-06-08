import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    console.log("button");
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <button>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png"
            alt="menu"
            className="h-8 px-2"
            onClick={toggleMenuHandler}
          />
        </button>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="youtube logo"
          className="h-14 px-2"
        />
      </div>
      <div className="flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="border rounded-full-lg w-96 p-2 h-10"
        />
        <button>
          <img
            src="https://friconix.com/png/fi-xtluhl-magnifying-glass-thin.png"
            alt=""
            className="h-10 bg-gray-100 rounded-full-lg hover:bg-gray-200"
          />
        </button>
      </div>
      <div className="flex items-center">
        <img
          src="https://waryhub.com/files/preview/960x960/11747654922nffoetctd3yijqonmiuoax0gpsrksemmbi8bmilcj65dubpbztzftchhcuwihpvdhj6ucshizdxnuosh1pqhz5j3xpw2ebgmgiac.png"
          alt="bellIcon"
          className="h-8 px-2"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="userIcon"
          className="h-8 px-2"
        />
      </div>
    </div>
  );
}

export default Head;
