import Video from "../types/video";
import useToggle from "./useToggle";

function useSort(videos: Video[]) {
  const [favoritesOnly, toggleFavoritesOnly] = useToggle();

  const listToDisplay = favoritesOnly
    ? videos.filter(({ favorite }) => favorite)
    : // Spread to prevent mutation of state by sort()
      [...videos];

  return { listToDisplay, favoritesOnly, toggleFavoritesOnly };
}

export default useSort;
