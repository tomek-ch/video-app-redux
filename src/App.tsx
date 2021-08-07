import { useEffect } from "react";
import { Button, Container } from "reactstrap";
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
      <h1>Video App</h1>
      <Button onClick={loadDemoData}>Load demo videos</Button>
      <NewVideoForm addVideo={addVideo} />
      {videos.map((video) => (
        <VideoCard key={video.id} {...{ video, removeVideo, toggleFavorite }} />
      ))}
    </Container>
  );
}

export default App;
