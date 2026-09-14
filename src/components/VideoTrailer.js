import { useSelector } from "react-redux";

const VideoTrailer = () => {
  const videoTrailer = useSelector((store) => store.movies.movieVideo);
  const videoKeyId = videoTrailer?.key;

  if (!videoKeyId) return null;

  return (
    <div className="video-trailer">
      <iframe
        id="ytplayer"
        type="text/html"
        src={
          "https://www.youtube.com/embed/" +
          videoKeyId +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          videoKeyId +
          "&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
        }
        title="Movie trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoTrailer;
