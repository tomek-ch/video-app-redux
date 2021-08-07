import { useEffect } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import VideoCard from "./components/VideoCard";
import useVideos from "./hooks/useVideos";

function App() {
  const { videos, addVideo, removeVideo, toggleFavorite, loadDemoData } =
    useVideos();

  useEffect(() => {
    const data = JSON.stringify(videos);
    localStorage.setItem("videos", data);
  }, [videos]);

  return (
    <Container>
      <Header {...{ loadDemoData }} />
      <NewVideoForm addVideo={addVideo} />
      {videos.map((video) => (
        <VideoCard key={video.id} {...{ video, removeVideo, toggleFavorite }} />
      ))}
    </Container>
  );
}

export default App;
