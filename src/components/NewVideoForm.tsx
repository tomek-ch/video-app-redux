import { useState } from "react";
import { Alert, Button, Form, Input, Label } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";
import getVideo from "../utils/getVideo";

function NewVideoForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { addVideo } = useVideosContext();

  return (
    <Form
      className="top"
      onSubmit={async (e) => {
        e.preventDefault();
        const video = await getVideo(text);

        if (!video) {
          setError("Could not find that video");
          return;
        }

        const addedSuccessfully = addVideo(video);
        if (addedSuccessfully) {
          setIsSuccessful(true);
          setError("");
          setText("");
          return;
        }

        setError("Video already in library");
      }}
    >
      <Label for="video">Video url or id</Label>
      <div className="d-flex my-2">
        <Input
          placeholder="https://youtube.com/..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="video"
          className="me-2"
        />
        <Button color="primary" disabled={!text}>
          Add
        </Button>
      </div>
      {error && <Alert color="danger">{error}</Alert>}
      {isSuccessful && <Alert color="success">Video added successfully</Alert>}
    </Form>
  );
}

export default NewVideoForm;
