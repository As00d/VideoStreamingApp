import { useSelector } from "react-redux";
import { EXPLORE_SIDEBAR } from "../utils/Constants";
function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="w-64 overflow-scroll h-screen">
        <ul>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="Home"
              className="h-6 px-2"
            />
            <p className="px-2">Home</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://images.seeklogo.com/logo-png/49/2/youtube-shorts-logo-png_seeklogo-490668.png"
              alt="Shorts"
              className="h-6 px-2"
            />
            <p className="px-2">Shorts</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://images.icon-icons.com/2248/PNG/512/youtube_subscription_icon_136007.png"
              alt="Subscriptions"
              className="h-6 px-2"
            />
            <p className="px-2">Subscriptions</p>
          </li>
          <hr />
        </ul>
        <ul>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <h3 className="h-6 px-2 font-medium">Subscriptions</h3>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61122.png"
              alt="History"
              className="h-6 px-2"
            />
            <p className="px-2">History</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/221/294/non_2x/playlist-icon-symbol-design-illustration-vector.jpg"
              alt="Shorts"
              className="h-6 px-2"
            />
            <p className="px-2">Playlist</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://cdn.creazilla.com/icons/3264833/watch-later-icon-md.png"
              alt="Watch Later"
              className="h-6 px-2"
            />
            <p className="px-2">Watch Later</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rTpXRr4fT3k5UE7qXmV1PUgtAypBBoi7FA&s"
              alt="Liked Logo"
              className="h-6 px-2"
            />
            <p className="px-2">Liked</p>
          </li>
          <hr />
        </ul>
        <ul>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <h3 className="h-6 px-2 font-medium">Explore</h3>
          </li>
          {EXPLORE_SIDEBAR.map((item) => {
            return (
              <li
                key={item.id}
                className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg"
              >
                <img src={item.iconLink} alt={item.name} className="h-6 px-2" />
                <p className="px-2">{item.name}</p>
              </li>
            );
          })}
          <hr />
        </ul>
        <ul>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <h3 className="h-6 px-2 font-medium">Subscriptions</h3>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61122.png"
              alt="History"
              className="h-6 px-2"
            />
            <p className="px-2">History</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/221/294/non_2x/playlist-icon-symbol-design-illustration-vector.jpg"
              alt="Shorts"
              className="h-6 px-2"
            />
            <p className="px-2">Playlist</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://cdn.creazilla.com/icons/3264833/watch-later-icon-md.png"
              alt="Watch Later"
              className="h-6 px-2"
            />
            <p className="px-2">Watch Later</p>
          </li>
          <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rTpXRr4fT3k5UE7qXmV1PUgtAypBBoi7FA&s"
              alt="Liked Logo"
              className="h-6 px-2"
            />
            <p className="px-2">Liked Logo</p>
          </li>
          <hr />
        </ul>
      </div>
    )
  );
}

export default SideBar;
