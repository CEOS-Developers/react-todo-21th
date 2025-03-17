import styled from "styled-components";

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const AddButton = styled.button`
  width: 18%;
`;
const AddInput = styled.input`
  width: 80%;
  padding: 5px;
`;
const AddTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 27px;
`;
const Contents = styled.span`
  font-size: 1.2rem;
  margin-left: 10px;
  margin-right: 35px;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  padding: 1.5px 4px;
`;
const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  @media (max-width: 768px) {
    width: 80%;
  }
  background-color: white;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 30px;
`;
const OverLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export {
  ModalTitle,
  AddButton,
  AddInput,
  AddTodoContainer,
  Contents,
  TodoItem,
  DeleteButton,
  ModalContainer,
  Modal,
  OverLayout,
};
