import { viewOnYoutubeVideo } from "../common/helperMethods";
function VideoCard({ data }) {
  return (
    <div className="rounded-xl w-[397px] my-4">
      <img
        src={data.snippet.thumbnails.maxres?.url}
        className="rounded-lg w-full"
        alt=""
      />
      <p className="font-medium text-md my-2">{data.snippet.title}</p>

      <p className="flex items-center">
        <span className="text-gray-500 mr-1">{data.snippet.channelTitle}</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/2048px-Eo_circle_grey_checkmark.svg.png"
          alt=""
          className="h-3.5 shadow-lg"
        />
      </p>
      <p className="flex items-center text-sm">
        <span className="text-gray-600 mr-1">
          {viewOnYoutubeVideo(data.statistics.viewCount)} views
        </span>
        <span className="text-gray-600 mr-1">.</span>
        <span className="text-gray-600 mr-1">{data.snippet.publishedAt}</span>
      </p>
    </div>
  );
}

export default VideoCard;
