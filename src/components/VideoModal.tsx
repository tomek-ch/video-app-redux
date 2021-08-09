import { Modal, ModalBody, CardImg, ModalFooter } from "reactstrap";
import Video from "../types/video";
import getEmbedLink from "../utils/getEmbedLink";
import VideoDetails from "./VideoDetail";

interface Props {
  video: Video;
  isModalOpen: boolean;
  toggleModal: () => void;
}

function VideoModal({
  video,
  video: { thumbnail, id, title },
  isModalOpen,
  toggleModal,
}: Props) {
  return (
    <div>
      <CardImg onClick={toggleModal} src={thumbnail} alt="Video thumbnail" />
      <Modal isOpen={isModalOpen} toggle={toggleModal} size="xl">
        <ModalBody>
          <div className="ratio ratio-16x9">
            <iframe title={title} src={getEmbedLink(id)} />
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="me-auto">
            <VideoDetails {...{ video, toggleModal, isModal: true }} />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default VideoModal;
