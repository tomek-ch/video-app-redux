import Video from "../types/video";
import useToggle from "./useToggle";

function useFilter(list: Video[]) {
  const [oldestFirst, toggleOldestFirst] = useToggle();
  const filtered = oldestFirst
    ? list.sort((a, b) => a.timestamp - b.timestamp)
    : list;

  return { filtered, oldestFirst, toggleOldestFirst };
}

export default useFilter;
