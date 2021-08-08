import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Video from "../types/video";
import getEmbedLink from "../utils/getEmbedLink";

interface Props {
  video: Video;
  isModalOpen: boolean;
  toggleModal: () => void;
}

function VideoModal({
  video: { thumbnail, id, title },
  isModalOpen,
  toggleModal,
}: Props) {
  return (
    <div>
      <img onClick={toggleModal} src={thumbnail} alt="Video thumbnail" />
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
        <ModalBody>
          <iframe title={title} src={getEmbedLink(id)} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default VideoModal;
