import { Card, Col, Row } from "reactstrap";
import useToggle from "../hooks/useToggle";
import Video from "../types/video";
import VideoDetails from "./VideoDetail";
import VideoModal from "./VideoModal";

interface Props {
  video: Video;
}

function VideoCard({ video }: Props) {
  const [isModalOpen, toggleModal] = useToggle();

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
