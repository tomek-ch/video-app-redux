export const toggleSortByOldest = () => ({ type: "TOGGLE_SORT_BY_OLDEST" });

function sortByOldest(on = false, { type }) {
  switch (type) {
    case "TOGGLE_SORT_BY_OLDEST":
      return !on;
    default:
      return on;
  }
}

export default sortByOldest;
