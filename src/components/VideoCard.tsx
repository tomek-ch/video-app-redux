import { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import Video from "../types/video";
import VideoDetails from "./VideoDetail";
import VideoModal from "./VideoModal";

interface Props {
  video: Video;
}

function VideoCard({ video }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <Card className="p-5 mb-5">
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <VideoDetails {...{ video, toggleModal }} />
        </Col>
        <Col>
          <VideoModal {...{ video, toggleModal, isModalOpen }} />
        </Col>
      </Row>
      <div></div>
    </Card>
  );
}

export default VideoCard;
