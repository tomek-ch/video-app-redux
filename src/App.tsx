import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import PagesList from "./components/PagesList";
import VideosList from "./components/VideosList";
import { loadVideos } from "./redux/videos";
import getVideos from "./utils/vidsFromArray";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("videos");
    const initialData = localData ? JSON.parse(localData) : [];
    getVideos(initialData).then((videos) => {
      dispatch(loadVideos(videos));
    });
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <NewVideoForm />
      <VideosList />
      <PagesList />
    </Container>
  );
}

export default App;
