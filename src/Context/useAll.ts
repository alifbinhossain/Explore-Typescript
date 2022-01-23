import { useContext } from "react";
import { ThemeContext } from "./ContextProvider";

const useAll = () => {
  return useContext(ThemeContext);
};

export default useAll;
