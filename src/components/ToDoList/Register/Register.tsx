import { useState } from 'react';

import { PlusIcon, SendIcon } from '@/icons/ToDoList';

import postIt from '@/assets/post-it.svg';

import * as S from './Register.styled';

const Register = () => {
  const [task, setTask] = useState('');

  const handleTaskRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task.trim() === '') {
      alert('할 일을 입력해주세요!');
      return;
    }

    // TODO: 태스크 등록 로직 구현
  };

  return (
    <S.RegisterContainer>
      <S.RegisterPostIt src={postIt} alt="post-it" />
      <S.RegisterContent>
        <S.RegisterTitleSection>
          <S.RegisterTitle>Register</S.RegisterTitle>
          <SendIcon />
        </S.RegisterTitleSection>

        <S.TaskRegisterForm
          id="task-register-form"
          onSubmit={handleTaskRegister}
        >
          <S.TaskRegisterInput
            type="text"
            placeholder="Enter your task!"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            autoFocus
          />
          <S.TaskRegisterButton type="submit">
            <PlusIcon />
            Add
          </S.TaskRegisterButton>
        </S.TaskRegisterForm>
      </S.RegisterContent>
    </S.RegisterContainer>
  );
};

export default Register;
