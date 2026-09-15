const VideoTitle = ({ title, overview }) => {
  return (
    <div className="videotitle-container">
      <div className="video-info">
        <h1>{title}</h1>
        <p className="video-description">{overview}</p>
        <div className="video-actions">
          <button className="video-play-button" type="button">
            <span aria-hidden="true">▶</span>
            Play
          </button>
          <button className="video-info-button" type="button">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
