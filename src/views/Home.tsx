import styled from 'styled-components';
import { useCalendarLogic } from '../hooks/calendar/useCalendarLogic';
import { useDateTodos } from '../hooks/todos/useDateTodos';
import Calendar from '../components/Calendar';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function Home() {
  const calendarLogic = useCalendarLogic();
  const dateTodos = useDateTodos();

  return (
    <Container>
      <Calendar
        today={calendarLogic.today}
        selectedDateKey={calendarLogic.selectedDateKey}
        thisYear={calendarLogic.calendarDate.getFullYear()}
        thisMonth={calendarLogic.calendarDate.getMonth()}
        daysByWeek={calendarLogic.daysByWeek}
        dateStats={dateTodos.dateStats}
        onChangeMonth={calendarLogic.changeMonth}
        onGoToToday={calendarLogic.goToToday}
        onSelectDateKey={calendarLogic.selectDateKey}
      />
      <TodoInput
        selectedDateKey={calendarLogic.selectedDateKey}
        onAddTodo={dateTodos.addTodo}
      />
      <TodoList
        dateKey={calendarLogic.selectedDateKey}
        todos={dateTodos.dateTodos[calendarLogic.selectedDateKey]}
        onToggleTodo={dateTodos.toggleTodo}
        onRemoveTodo={dateTodos.removeTodo}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
