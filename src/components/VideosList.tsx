import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row } from "reactstrap";
import useIsGridSelector from "../hooks/useIsGridSelector";
import usePaginationSelector from "../hooks/usePaginationSelector";
import { goToPage } from "../redux/currentPage";
import VideoCard from "./VideoCard";
import VideoTile from "./VideoTile";

function VideosList() {
  const { currentPageVideos, pageCount, currentPage } = usePaginationSelector();
  const isGrid = useIsGridSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage && !currentPageVideos.length) {
      dispatch(goToPage(currentPage - 1));
    }
  }, [currentPageVideos, pageCount, currentPage, dispatch]);

  if (isGrid) {
    return (
      <Row>
        {currentPageVideos.map((vid) => (
          <VideoTile key={vid.id} video={vid} />
        ))}
      </Row>
    );
  }

  return (
    <div>
      {currentPageVideos.map((vid) => (
        <VideoCard key={vid.id} video={vid} />
      ))}
    </div>
  );
}

export default VideosList;
