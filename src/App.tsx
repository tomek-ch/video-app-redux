import { Container } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import PagesList from "./components/PagesList";
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
      <PagesList />
    </Container>
  );
}

export default App;
