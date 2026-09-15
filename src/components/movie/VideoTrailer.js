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
          "?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&" +
          "iv_load_policy=3&loop=1&modestbranding=1&playsinline=1&" +
          "rel=0&showinfo=0&autohide=1&playlist=" +
          videoKeyId
        }
        title="Movie trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default VideoTrailer;
