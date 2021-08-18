import { useSelector } from "react-redux";
import Store from "../types/store";
import Video from "../types/video";

function useAllVidsSelector() {
  return useSelector<Store, Video[]>(({ videos }) => videos);
}

export default useAllVidsSelector;
