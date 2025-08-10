import { useSelector } from "react-redux";
import {
  EXPLORE_SIDEBAR,
  MORE_FROM_YOUTUBE,
  SUBSCRIPTION,
  TOP_YOUTUBE_SIDEBAR,
} from "../utils/Constants";
function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="w-64 overflow-scroll h-screen text-sm">
        <ul>
          {TOP_YOUTUBE_SIDEBAR.map((item) => {
            return (
              <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
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
          {SUBSCRIPTION.map((item) => {
            return (
              <li className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg">
                <img src={item.iconLink} alt={item.name} className="h-6 px-2" />
                <p className="px-2">{item.name}</p>
              </li>
            );
          })}
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
                className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"
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
            <h3 className="h-6 px-2 font-medium">More from Youtube</h3>
          </li>
          {MORE_FROM_YOUTUBE.map((item) => {
            return (
              <li
                key={item.id}
                className="flex items-center px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <img src={item.iconLink} alt={item.name} className="h-6 px-2" />
                <p className="px-2">{item.name}</p>
              </li>
            );
          })}
          <hr />
        </ul>
      </div>
    )
  );
}

export default SideBar;
