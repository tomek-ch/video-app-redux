export const goToPage = (page) => ({
  type: "GO_TO_PAGE",
  payload: page,
});

function currentPage(page = 0, { type, payload }) {
  switch (type) {
    case "GO_TO_PAGE":
      return payload;
    default:
      return page;
  }
}

export default currentPage;
