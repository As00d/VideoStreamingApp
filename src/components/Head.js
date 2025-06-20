import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/Constants";
import { Link } from "react-router-dom";

function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchDataFromAPI = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=14&type=video&q=${userSearch}&key=${GOOGLE_API_KEY}`
    );
    const dataToJson = await data.json();
    setSearchResult(dataToJson.items);
  };

  useEffect(
    function () {
      fetchDataFromAPI();
    },
    [userSearch]
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full px-4 py-2">
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

        <div className="relative flex items-center w-[40rem]">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-l-full w-full p-2 h-10"
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <button>
            <img
              src="https://friconix.com/png/fi-xtluhl-magnifying-glass-thin.png"
              alt=""
              className="h-10 bg-gray-100 rounded-r-full hover:bg-gray-200"
            />
          </button>

          {/* Overlapping dropdown */}
          <div className="absolute top-12 left-0 bg-white w-full max-h-64 overflow-y-auto shadow-lg rounded-md z-50">
            {searchResult &&
              searchResult.map((item) => (
                <li
                  key={item.etag}
                  className="p-2 border-b hover:bg-gray-100 text-sm cursor-pointer"
                >
                  {item.snippet.title}
                </li>
              ))}
          </div>
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
    </div>
  );
}

export default Head;
