import { useState } from "react";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";
import Video from "../types/video";
import formatDate from "../utils/formatDate";
import VideoModal from "./VideoModal";

interface Props {
  video: Video;
}

function VideoCard({
  video,
  video: { id, title, views, likes, timestamp, favorite },
}: Props) {
  const { removeVideo, toggleFavorite } = useVideosContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <Card className="p-5 mb-5">
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <h2>{title}</h2>
          <p>Views: {views ?? "Not available"}</p>
          <p>Likes: {likes}</p>
          <p>Added: {formatDate(timestamp)}</p>
          <Label>
            <Input
              type="checkbox"
              checked={favorite}
              onChange={() => toggleFavorite(id)}
              className="mb-4 me-1"
            />
            Favorite
          </Label>
          <div>
            <Button
              onClick={() => removeVideo(id)}
              color="danger"
              className="me-2"
            >
              Delete
            </Button>
            <Button onClick={toggleModal} color="primary">
              Watch
            </Button>
          </div>
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
