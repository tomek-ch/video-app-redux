import Video from "./video";

interface Store {
  videos: Video[];
  favFilter: boolean;
  sortByOldest: boolean;
  currentPage: number;
  isGrid: boolean;
  alert: {
    error: boolean;
    message: string;
  };
}

export default Store;
