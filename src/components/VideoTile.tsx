import { useState } from "react";
import Col from "reactstrap/es/Col";
import Video from "../types/video";
import VideoModal from "./VideoModal";

interface Props {
  video: Video;
}

function VideoTile({ video }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  return (
    <Col xs={4} className="mb-4">
      <VideoModal {...{ video, isModalOpen, toggleModal }} />
    </Col>
  );
}

export default VideoTile;
