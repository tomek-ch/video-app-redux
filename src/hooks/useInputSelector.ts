import { useSelector } from "react-redux";
import Store from "../types/store";

function useFavFilterSelector() {
  return useSelector<Store, string>(({ query }) => query);
}

export default useFavFilterSelector;
