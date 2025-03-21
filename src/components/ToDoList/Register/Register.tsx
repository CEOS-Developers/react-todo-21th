import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import Postit from '@/components/Postit/PostIt';

import { PlusIcon, SendIcon } from '@/icons/ToDoList';

import * as S from './Register.styled';

const Register = (): JSX.Element => {
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
    <Postit>
      <S.RegisterTitleSection>
        <S.RegisterTitle>Register</S.RegisterTitle>
        <SendIcon />
      </S.RegisterTitleSection>

      <S.TaskRegisterForm id="task-register-form" onSubmit={handleTaskRegister}>
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
    </Postit>
  );
};

export default Register;
