import { useSelector } from "react-redux";
import Store from "../types/store";

function useAlertSelector() {
  return useSelector<Store, { error: boolean; message: string }>(
    ({ alert }) => alert
  );
}

export default useAlertSelector;
