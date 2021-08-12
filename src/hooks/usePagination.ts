import { useEffect, useState } from "react";
import Video from "../types/video";

function usePagination(list: Video[]) {
  const VIDS_PER_PAGE = 6;
  const pagesCount = Math.ceil(list.length / VIDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const currentPageVideos = list.slice(
    currentPage * VIDS_PER_PAGE,
    currentPage * VIDS_PER_PAGE + VIDS_PER_PAGE
  );

  useEffect(() => {
    if (currentPage && !currentPageVideos.length) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPageVideos, pagesCount, currentPage]);

  return { pagesCount, currentPage, currentPageVideos, setCurrentPage };
}

export default usePagination;
