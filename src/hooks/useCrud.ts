import Video from "../types/video";

interface Args {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  handleRemove: () => void;
}

function useCrud({ videos, setVideos }: Args) {
  const addVideo = (newVid: Video) => {
    const videoExists = videos.find(({ id }) => id === newVid.id);
    if (videoExists) {
      return false;
    }

    setVideos((prev) => [newVid, ...prev]);
    return true;
  };

  const removeVideo = (deleteId: string) => {
    setVideos((prev) => prev.filter(({ id }) => id !== deleteId));
  };

  const toggleFavorite = (favId: string) => {
    setVideos((prev) =>
      prev.map((vid) =>
        vid.id === favId
          ? {
              ...vid,
              favorite: !vid.favorite,
            }
          : vid
      )
    );
  };

  return { addVideo, removeVideo, toggleFavorite };
}

export default useCrud;
