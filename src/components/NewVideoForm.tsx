import { useState } from "react";
import { Alert, Button, Col, Form, Input, Label, Row } from "reactstrap";
import { useVideosContext } from "../context/VideosContext";
import getVideo from "../utils/getVideo";

function NewVideoForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { addVideo } = useVideosContext();

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const video = await getVideo(text);

        if (!video) {
          return setError("Could not find that video");
        }

        const addedSuccessfully = addVideo(video);
        setError(addedSuccessfully ? "" : "Video already in library");
      }}
    >
      <Label for="video">Video url or id</Label>
      <Row>
        <Col>
          <Input
            placeholder="https://youtube.com/..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="video"
          />
        </Col>
        <Col>
          <Button color="primary" disabled={!text}>
            Add
          </Button>
        </Col>
      </Row>
      {error && <Alert color="danger">{error}</Alert>}
    </Form>
  );
}

export default NewVideoForm;
