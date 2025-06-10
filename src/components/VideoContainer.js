import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
function VideoContainer() {
  const [youtubeVideoData, setYoutubeVideoData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const dataToJson = await data.json();
    console.log(dataToJson.items);
    setYoutubeVideoData(dataToJson.items);
  };
  useEffect(function () {
    fetchData();
  }, []);

  return (
    <div className="p-4 rounded-lg flex flex-wrap justify-between">
      {youtubeVideoData.map((data) => {
        return <VideoCard data={data} key={data.id} />;
      })}
    </div>
  );
}

export default VideoContainer;
