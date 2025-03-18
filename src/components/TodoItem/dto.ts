import { ChangeEvent } from 'react';
import { TodoDto } from '../../pages/Home/dto';

export interface TodoItemProps extends TodoDto {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
