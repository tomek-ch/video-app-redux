export const updateQuery = (query) => ({
  type: "UPDATE_QUERY",
  payload: query,
});

function query(value = "", { type, payload }) {
  switch (type) {
    case "UPDATE_QUERY":
      return payload;
    case "VIDEO_ADD_SUCCESS":
      return "";
    default:
      return value;
  }
}

export default query;
