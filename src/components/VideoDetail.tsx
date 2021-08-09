import { title } from "process";
import { Label, Input, Button } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";
import Video from "../types/video";
import formatDate from "../utils/formatDate";

interface Props {
  video: Video;
  toggleModal: () => void;
}

function VideoDetails({
  video: { id, views, likes, timestamp, favorite },
  toggleModal,
}: Props) {
  const { toggleFavorite, removeVideo } = useVideosContext();

  return (
    <>
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
        <Button onClick={() => removeVideo(id)} color="danger" className="me-2">
          Delete
        </Button>
        <Button onClick={toggleModal} color="primary">
          Watch
        </Button>
      </div>
    </>
  );
}

export default VideoDetails;
