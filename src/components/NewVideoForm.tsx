import { useState } from "react";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import useYtVideo from "../hooks/useYtVideo";

function NewVideoForm() {
  const [text, setText] = useState("");
  const [video, handleVideo] = useYtVideo();
  console.log({ video });

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        handleVideo(text);
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
