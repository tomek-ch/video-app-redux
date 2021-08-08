import { Button, Card, Input, Label } from "reactstrap";
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

  return (
    <Card>
      <h2>{title}</h2>
      <p>Views: {views ?? "Not available"}</p>
      <p>Likes: {likes}</p>
      <p>Added: {formatDate(timestamp)}</p>
      <Label>
        <Input
          type="checkbox"
          checked={favorite}
          onChange={() => toggleFavorite(id)}
        />
        Favorite
      </Label>
      <VideoModal video={video} />
      <Button onClick={() => removeVideo(id)} color="danger">
        Delete
      </Button>
    </Card>
  );
}

export default VideoCard;
