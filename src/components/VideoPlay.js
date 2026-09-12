import { useSelector } from "react-redux";

const VideoPlay = () => {
  const movieVideo = useSelector((store) => store.movies.movieVideo);

  if (!movieVideo?.key) return null;

  return (
    <div className="videoplay-container">
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          movieVideo.key +
          "?autoplay=1&mute=1&controls=0&fs=0&cc_load_policy=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1&disablekb=1&loop=1&playlist=" +
          movieVideo.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlay;
