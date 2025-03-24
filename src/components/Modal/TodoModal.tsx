import ReactDOM from "react-dom";
import { Modal, ModalContainer, OverLayout } from "./TodoModalStyle.ts";
import TodoModalContents from "./TodoModalContents.tsx";

interface TodoModalProps {
  isClose: () => void;
  date: string;
}
const TodoModal = ({ isClose, date }: TodoModalProps) => {
  const modalRoot = document.getElementById("modal-root"); //id가 modal-root인 요소를 찾아서 modalRoot에 할당
  if (!modalRoot) return null; //modalRoot가 없으면 null 반환

  return ReactDOM.createPortal(
    //ReactDOM.createPortal()을 사용하여 모달을 렌더링
    <OverLayout onClick={isClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        {/* 모달을 클릭했을 때 이벤트 전파(isClose활성화)를 막기 위해
        stopPropagation() 사용 */}
        <ModalContainer>
          <TodoModalContents date={date} />
        </ModalContainer>
      </Modal>
    </OverLayout>,
    modalRoot //모달을 렌더링할 위치
  );
};
export default TodoModal;
