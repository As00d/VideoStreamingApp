import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
function VideoContainer() {
  const [youtubeVideoData, setYoutubeVideoData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const dataToJson = await data.json();
    setYoutubeVideoData(dataToJson.items);
  };
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <div className="p-4 rounded-lg flex flex-wrap justify-between">
      {youtubeVideoData.map((data) => {
        return (
          <Link to={`watch?v=${data.id}`}>
            <VideoCard data={data} key={data.id} />{" "}
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;
