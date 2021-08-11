import Video from "../types/video";
import useToggle from "./useToggle";

function useSort(list: Video[]) {
  const [oldestFirst, toggleOldestFirst] = useToggle();
  const sorted = oldestFirst
    ? [...list].sort((a, b) => a.timestamp - b.timestamp)
    : list;

  return { sorted, oldestFirst, toggleOldestFirst };
}

export default useSort;
