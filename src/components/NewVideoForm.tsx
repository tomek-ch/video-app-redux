import { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert, Button, Form, Input, Label } from "reactstrap";
import useAlertSelector from "../hooks/useAlertSelector";
import { addVideo } from "../redux/videos";

function NewVideoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { error, message } = useAlertSelector();

  return (
    <Form
      className="top"
      onSubmit={async (e) => {
        e.preventDefault();
        dispatch(addVideo(text));
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
      {message && <Alert color={error ? "danger" : "success"}>{message}</Alert>}
    </Form>
  );
}

export default NewVideoForm;
