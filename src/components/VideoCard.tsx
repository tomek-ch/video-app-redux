import { Button } from "reactstrap";
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
    <div>
      <h2>{title}</h2>
      <p>Views: {views}</p>
      <p>Likes: {likes}</p>
      <img src={thumbnail} alt={`Thumbnail for ${title}`} />
      <p>Added: {formatDate(timestamp)}</p>
      <Button onClick={() => removeVideo(id)}>Delete</Button>
      <Button onClick={() => toggleFavorite(id)}>
        {favorite ? "Remove from favorites" : "Add to favorites"}
      </Button>
    </div>
  );
}

export default VideoCard;
