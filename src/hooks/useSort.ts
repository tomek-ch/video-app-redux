import Video from "../types/video";
import useToggle from "./useToggle";

function useSort(videos: Video[]) {
  const [favoritesOnly, toggleFavoritesOnly] = useToggle();

  const sorted = favoritesOnly
    ? videos.filter(({ favorite }) => favorite)
    : // Spread to prevent mutation of state by sort()
      [...videos];

  return { sorted, favoritesOnly, toggleFavoritesOnly };
}

export default useSort;
