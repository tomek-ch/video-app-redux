import { Modal, ModalHeader, ModalBody, CardImg } from "reactstrap";
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
      <CardImg onClick={toggleModal} src={thumbnail} alt="Video thumbnail" />
      <Modal isOpen={isModalOpen} toggle={toggleModal} size="xl">
        <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
        <ModalBody>
          <div className="ratio ratio-16x9">
            <iframe title={title} src={getEmbedLink(id)} />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default VideoModal;
