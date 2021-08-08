import { Container } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import VideoCard from "./components/VideoCard";
import { useVideosContext } from "./context/VideosContext";

function App() {
  const { videos } = useVideosContext();

  return (
    <Container>
      <Header />
      <NewVideoForm />
      {videos.map((vid) => (
        <VideoCard key={vid.id} video={vid} />
      ))}
    </Container>
  );
}

export default App;
