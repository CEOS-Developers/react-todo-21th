import styled from 'styled-components';
import { Todo } from '../types/todo';
import { ToggleTodo, RemoveTodo } from '../types/todoActions';
import TodoItem from './TodoItem';

interface TodoListProps {
  dateKey: string;
  todos: Todo[];
  onToggleTodo: ToggleTodo;
  onRemoveTodo: RemoveTodo;
}

function TodoList({
  dateKey,
  todos = [],
  onToggleTodo,
  onRemoveTodo,
}: TodoListProps) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(dateKey, todo.id)}
          onRemove={() => onRemoveTodo(dateKey, todo.id)}
        />
      ))}
    </List>
  );
}

export default TodoList;

const List = styled.ul``;
