import { useSelector } from "react-redux";
import Store from "../types/store";

function useIsGridSelector() {
  return useSelector<Store, boolean>(({ isGrid }) => isGrid);
}

export default useIsGridSelector;
