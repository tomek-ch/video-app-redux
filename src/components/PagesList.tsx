import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";

function PagesList() {
  const { pagesCount, setCurrentPage, currentPage } = useVideosContext();
  const setPage = (page: number) => {
    if (currentPage !== page) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Pagination aria-label="Videos list">
      <PaginationItem>
        <PaginationLink first onClick={() => setPage(0)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous onClick={() => setPage(currentPage - 1)} />
      </PaginationItem>
      {[...Array(pagesCount).keys()].map((page) => (
        <PaginationItem key={`page-${page}`} active={currentPage === page}>
          <PaginationLink onClick={() => setPage(page)}>
            {page + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink next onClick={() => setPage(currentPage + 1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last onClick={() => setPage(pagesCount - 1)} />
      </PaginationItem>
    </Pagination>
  );
}

export default PagesList;
