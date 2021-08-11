import Video from "../types/video";
import useToggle from "./useToggle";

function useFilter(videos: Video[]) {
  const [favoritesOnly, toggleFavoritesOnly] = useToggle();

  const filtered = favoritesOnly
    ? videos.filter(({ favorite }) => favorite)
    : videos;

  return { filtered, favoritesOnly, toggleFavoritesOnly };
}

export default useFilter;
