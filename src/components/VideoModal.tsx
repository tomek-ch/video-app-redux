import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Video from "../types/video";
import getEmbedLink from "../utils/getEmbedLink";

interface Props {
  video: Video;
}

function VideoModal({ video: { thumbnail, id, title } }: Props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal((prev) => !prev);

  return (
    <div>
      <img onClick={toggle} src={thumbnail} alt="Video thumbnail" />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <iframe title={title} src={getEmbedLink(id)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default VideoModal;
