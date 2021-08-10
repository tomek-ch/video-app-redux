import { Row } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";
import VideoCard from "./VideoCard";
import VideoTile from "./VideoTile";

function VideosList() {
  const { videos, isGrid } = useVideosContext();

  if (isGrid) {
    return (
      <Row>
        {videos.map((vid) => (
          <VideoTile key={vid.id} video={vid} />
        ))}
      </Row>
    );
  }

  return (
    <div>
      {videos.map((vid) => (
        <VideoCard key={vid.id} video={vid} />
      ))}
    </div>
  );
}

export default VideosList;
