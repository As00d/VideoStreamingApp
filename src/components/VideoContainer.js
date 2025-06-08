import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
function VideoContainer() {
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const dataToJson = await data.json();
    console.log(dataToJson);
  };
  useEffect(function () {
    fetchData();
  }, []);
  return <div>VideoContainer</div>;
}

export default VideoContainer;
