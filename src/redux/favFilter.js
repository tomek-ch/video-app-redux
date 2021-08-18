export const toggleFavFilter = () => ({ type: "TOGGLE_FAV_FILTER" });

function favFilter(on = false, { type }) {
  switch (type) {
    case "TOGGLE_FAV_FILTER":
      return !on;
    default:
      return on;
  }
}

export default favFilter;
