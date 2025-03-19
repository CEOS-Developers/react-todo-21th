import styled from "styled-components";

// 모달 배경
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 내용
export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  max-width: 90%;
  width: 25rem;
  max-height: 90%;
  overflow-y: auto;
  z-index: 1100;
  position: relative;
`;

// 닫기 버튼
export const CloseButton = styled.button``;
