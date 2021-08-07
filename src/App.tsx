import { Container } from "reactstrap";
import NewVideoForm from "./components/NewVideoForm";
import VideoCard from "./components/VideoCard";
import useVideos from "./hooks/useVideos";

function App() {
  const { videos, addVideo, removeVideo } = useVideos();

  return (
    <Container>
      <h1>Video App</h1>
      <NewVideoForm addVideo={addVideo} />
      {videos.map((vid) => (
        <VideoCard key={vid.id} video={vid} removeVideo={removeVideo} />
      ))}
    </Container>
  );
}

export default App;
