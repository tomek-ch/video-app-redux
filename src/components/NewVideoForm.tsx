import { useState } from "react";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import getYtVideo from "../utils/getYtVideo";
import Video from "../types/video";

interface Props {
  addVideo: (newVideo: Video) => void;
}

function NewVideoForm({ addVideo }: Props) {
  const [text, setText] = useState("");

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const video = await getYtVideo(text);
        addVideo(video);
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
          <Button disabled={!text}>Add</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default NewVideoForm;
