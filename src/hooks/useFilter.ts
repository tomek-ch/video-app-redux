import Video from "../types/video";
import useToggle from "./useToggle";

function useFilter(list: Video[]) {
  const [oldestFirst, toggleOldestFirst] = useToggle();

  if (oldestFirst) {
    list.sort((a, b) => a.timestamp - b.timestamp);
  }

  return { oldestFirst, toggleOldestFirst };
}

export default useFilter;
