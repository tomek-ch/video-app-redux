import { useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import usePaginationSelector from "../hooks/usePaginationSelector";
import { goToPage } from "../redux/currentPage";

function PagesList() {
  const dispatch = useDispatch();
  const { pageCount, currentPage } = usePaginationSelector();

  if (pageCount < 2) {
    return null;
  }

  const setPage = (page: number) => {
    if (currentPage !== page) {
      dispatch(goToPage(page));
      window.scrollTo(0, 0);
    }
  };

  const goToPrevPage = () => {
    if (currentPage !== 0) {
      setPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage + 1 !== pageCount) {
      setPage(currentPage + 1);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination aria-label="Videos list">
        <PaginationItem>
          <PaginationLink onClick={() => setPage(0)}>«</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={goToPrevPage}>‹</PaginationLink>
        </PaginationItem>
        {[...Array(pageCount).keys()].map((page) => (
          <PaginationItem key={`page-${page}`} active={currentPage === page}>
            <PaginationLink onClick={() => setPage(page)}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink onClick={goToNextPage}>›</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPage(pageCount - 1)}>
            »
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default PagesList;
