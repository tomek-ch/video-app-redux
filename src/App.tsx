import { Container, Row } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import PagesList from "./components/PagesList";
import VideoCard from "./components/VideoCard";
import VideoTile from "./components/VideoTile";
import { useVideosContext } from "./context/VideosContext";

function App() {
  const { videos, isGrid } = useVideosContext();

  return (
    <Container>
      <Header />
      <NewVideoForm />
      {isGrid ? (
        <Row>
          {videos.map((vid) => (
            <VideoTile key={vid.id} video={vid} />
          ))}
        </Row>
      ) : (
        videos.map((vid) => <VideoCard key={vid.id} video={vid} />)
      )}
      <PagesList />
    </Container>
  );
}

export default App;
