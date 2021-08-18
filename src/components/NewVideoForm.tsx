import { useDispatch } from "react-redux";
import { Alert, Button, Form, Input, Label } from "reactstrap";
import useAlertSelector from "../hooks/useAlertSelector";
import useInputSelector from "../hooks/useInputSelector";
import { updateQuery } from "../redux/query";
import { addVideo } from "../redux/videos";

function NewVideoForm() {
  const dispatch = useDispatch();
  const { error, message } = useAlertSelector();
  const value = useInputSelector();

  return (
    <Form
      className="top"
      onSubmit={async (e) => {
        e.preventDefault();
        dispatch(addVideo(value, Date.now()));
      }}
    >
      <Label for="video">Video url or id</Label>
      <div className="d-flex my-2">
        <Input
          placeholder="https://youtube.com/..."
          value={value}
          onChange={(e) => dispatch(updateQuery(e.target.value))}
          id="video"
          className="me-2"
        />
        <Button color="primary" disabled={!value}>
          Add
        </Button>
      </div>
      {message && <Alert color={error ? "danger" : "success"}>{message}</Alert>}
    </Form>
  );
}

export default NewVideoForm;
