import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";

function PagesList() {
  const { pagesCount, setCurrentPage, currentPage } = useVideosContext();
  return (
    <Pagination aria-label="Videos list">
      {[...Array(pagesCount).keys()].map((page) => (
        <PaginationItem key={`page-${page}`} active={currentPage === page}>
          <PaginationLink
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
}

export default PagesList;
