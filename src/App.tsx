import { useState } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import VideoCard from "./components/VideoCard";
import useVideos from "./hooks/useVideos";

function App() {
  const {
    videos,
    addVideo,
    removeVideo,
    toggleFavorite,
    loadDemoData,
    wipeData,
  } = useVideos();

  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const listToDisplay = favoritesOnly
    ? videos.filter(({ favorite }) => favorite)
    : videos;

  const toggleFavFilter = () => setFavoritesOnly((prev) => !prev);

  return (
    <Container>
      <Header
        favFilter={{ value: favoritesOnly, toggle: toggleFavFilter }}
        data={{ load: loadDemoData, wipe: wipeData }}
      />
      <NewVideoForm addVideo={addVideo} />
      {listToDisplay.map((video) => (
        <VideoCard key={video.id} {...{ video, removeVideo, toggleFavorite }} />
      ))}
    </Container>
  );
}

export default App;
