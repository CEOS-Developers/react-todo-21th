import ReactDOM from "react-dom";
import { Modal, ModalContainer, OverLayout } from "./TodoModalStyle";
import TodoModalContents from "./TodoModalContents";

interface TodoModalProps {
  isClose: () => void;
  date: string;
}
const TodoModal = ({ isClose, date }: TodoModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <OverLayout onClick={isClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalContainer>
          <TodoModalContents date={date} />
        </ModalContainer>
      </Modal>
    </OverLayout>,
    modalRoot
  );
};
export default TodoModal;
