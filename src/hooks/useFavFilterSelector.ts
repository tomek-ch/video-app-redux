import { useSelector } from "react-redux";
import Store from "../types/store";

function useFavFilterSelector() {
  return useSelector<Store, boolean>(({ favFilter }) => favFilter);
}

export default useFavFilterSelector;
