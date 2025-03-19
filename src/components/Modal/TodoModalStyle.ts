import styled from "styled-components";

const ModalTitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;
const AddButton = styled.button`
  width: 18%;
  font-size: 0.8rem;
  color: #fff;
  background-color: rgb(107, 107, 107);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const AddInput = styled.input`
  width: 80%;
  padding: 5px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 5px;
  font-size: 0.8rem;
`;
const AddTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 27px;
`;
const Contents = styled.span`
  font-size: 1rem;
  margin-left: 10px;
  margin-right: 40px;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 15px;
  padding: 1px 5px;
  border-radius: 5px;
  background-color: rgb(146, 146, 146);
  color: white;
  height: 21px;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
`;
const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
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
