import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  useEffect(function () {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-2">
      <iframe
        width="1200"
        height="600"
        src={`https://www.youtube.com/embed/${params.get(
          "v"
        )}?si=zAR0iol1mqu8mjzm`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
