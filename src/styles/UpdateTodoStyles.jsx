import styled from "styled-components";

export const UpdateWrapper = styled.div`
  background-color: #222;
  color: white;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const UpdateContainer = styled.div`
  width: 80%;
  max-width: 500px;  // 최대 너비를 설정해서 너무 넓어지지 않도록
  padding: 20px;
  background-color: #333;  // 내용 배경 색상
  border-radius: 8px;
`;

export const CurrentDate = styled.div`
  font-size: 1.2rem;
  margin: 20px 10px 20px;
`;

export const CountTodo = styled.section`
  display:flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  gap: 20px;

  p {
    font-size: 1rem;
  }
`;

export const InputSection = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;

  input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #333;
    color: white;
  }

  button {
    padding: 10px 20px;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #777;
    }
  }
`;

export const TodoList = styled.section`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    width: 50px;
    height: 30px;

    &:hover {
      background-color: #c0392b;
    }
  }
`;
