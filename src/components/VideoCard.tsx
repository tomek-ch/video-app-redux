import { Button, Card, Input, Label } from "reactstrap";
import Video from "../types/video";
import formatDate from "../utils/formatDate";

interface Props {
  video: Video;
  removeVideo: (id: string) => void;
  toggleFavorite: (id: string) => void;
}

function VideoCard({
  video: { id, title, views, likes, thumbnail, timestamp, favorite },
  removeVideo,
  toggleFavorite,
}: Props) {
  return (
    <Card>
      <h2>{title}</h2>
      <p>Views: {views || "Not available"}</p>
      <p>Likes: {likes}</p>
      <img src={thumbnail} alt={`Thumbnail for ${title}`} />
      <p>Added: {formatDate(timestamp)}</p>
      <Button onClick={() => removeVideo(id)} color="danger">
        Delete
      </Button>
      <Label>
        <Input
          type="checkbox"
          checked={favorite}
          onChange={() => toggleFavorite(id)}
        />
        Favorite
      </Label>
    </Card>
  );
}

export default VideoCard;
