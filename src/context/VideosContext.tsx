import { ReactNode } from "react";
import { createContext, useContext } from "react";
import useVideos from "../hooks/useVideos";

type VideosContext = ReturnType<typeof useVideos>;
const Context = createContext<VideosContext>({} as VideosContext);

interface Props {
  children: ReactNode;
}

function VideosContextProvider({ children }: Props) {
  const contextValue = useVideos();
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

function useVideosContext() {
  return useContext(Context);
}

export { useVideosContext, VideosContextProvider };
