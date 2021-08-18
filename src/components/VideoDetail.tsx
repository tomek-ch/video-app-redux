import { useDispatch } from "react-redux";
import { Label, Input, Button } from "reactstrap";
import { removeVideo, toggleFavorite } from "../redux/videos";
import Video from "../types/video";
import formatDate from "../utils/formatDate";

interface Props {
  video: Video;
  isModal?: boolean;
  toggleModal: () => void;
}

function VideoDetails({
  video: { id, title, views, likes, timestamp, favorite },
  isModal,
  toggleModal,
}: Props) {
  const dispatch = useDispatch();

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
          onChange={() => dispatch(toggleFavorite(id))}
          className="mb-4 me-1"
        />
        Favorite
      </Label>
      <div>
        <Button onClick={toggleModal} color="primary" className="me-2">
          {isModal ? "Close" : "Watch"}
        </Button>
        <Button onClick={() => dispatch(removeVideo(id))} color="danger">
          Delete
        </Button>
      </div>
    </>
  );
}

export default VideoDetails;
