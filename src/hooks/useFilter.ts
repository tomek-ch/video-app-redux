import Video from "../types/video";
import useToggle from "./useToggle";

function useFilter(videos: Video[]) {
  const [favoritesOnly, toggleFavoritesOnly] = useToggle();

  const filtered = favoritesOnly
    ? videos.filter(({ favorite }) => favorite)
    : // Spread to prevent mutation of state by sort()
      [...videos];

  return { filtered, favoritesOnly, toggleFavoritesOnly };
}

export default useFilter;
