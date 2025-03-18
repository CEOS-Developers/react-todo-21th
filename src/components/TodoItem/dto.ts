import { ChangeEvent } from 'react';
import { TodoDto } from '../../pages/Home/dto';

export interface TodoItemProps extends Omit<TodoDto, 'date'> {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClickDeleteButton: (id: string) => void;
}
