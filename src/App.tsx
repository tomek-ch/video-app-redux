import { Container } from "reactstrap";
import Header from "./components/Header";
import NewVideoForm from "./components/NewVideoForm";
import PagesList from "./components/PagesList";
import VideosList from "./components/VideosList";

function App() {
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
