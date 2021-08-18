export const toggleIsGrid = () => ({ type: "TOGGLE_IS_GRID" });

function isGrid(on = false, { type }) {
  switch (type) {
    case "TOGGLE_IS_GRID":
      return !on;
    default:
      return on;
  }
}

export default isGrid;
