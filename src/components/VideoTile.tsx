import Col from "reactstrap/es/Col";
import useToggle from "../hooks/useToggle";
import Video from "../types/video";
import VideoModal from "./VideoModal";

interface Props {
  video: Video;
}

function VideoTile({ video }: Props) {
  const [isModalOpen, toggleModal] = useToggle();
  return (
    <Col xs={4} className="mb-4">
      <VideoModal {...{ video, isModalOpen, toggleModal }} />
    </Col>
  );
}

export default VideoTile;
