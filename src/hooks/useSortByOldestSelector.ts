import { useSelector } from "react-redux";
import Store from "../types/store";

function useSortByOldestSelector() {
  return useSelector<Store, boolean>(({ sortByOldest }) => sortByOldest);
}

export default useSortByOldestSelector;
