import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import Postit from '@/components/Postit/Postit';
import { PlusIcon, SendIcon } from '@/icons/ToDoList';

import { useTasks } from '@/hooks/useTasks';
import { useDate } from '@/hooks/useDate';

import * as S from './Register.styled';

const Register = (): JSX.Element => {
  const [task, setTask] = useState<string>('');

  const { addTask } = useTasks();
  const { selectedDate } = useDate();

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleTaskRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task.trim() === '') {
      alert('할 일을 입력해주세요!');
      return;
    }

    addTask(selectedDate, task);
    setTask('');
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
          onChange={handleTaskChange}
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
