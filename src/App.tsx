import "./App.css";
import { Button, Container, Form, Input, Label } from "reactstrap";

function App() {
  return (
    <Container>
      <Form>
        <Label for="video">Video url or id</Label>
        <Input id="id" placeholder="https://youtube.com/..." />
        <Button>Add</Button>
      </Form>
    </Container>
  );
}

export default App;
