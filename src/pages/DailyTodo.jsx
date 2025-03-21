import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Update from "../components/UpdateTodo";
import {useParams, useNavigate} from "react-router-dom";
import { formatDate } from "../utils/dateFormatter";

function DailyTodo() {
  const { date } = useParams();
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/");
  }

  useEffect(() => {
    const formattedDate = formatDate(date);
    const savedTodos = localStorage.getItem(`${formattedDate}`);
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [date]);

  return (
    <div>
      <Header title={`Todo List`} onClick = {handleHeaderClick} />
      <Update todos={todos} setTodos={setTodos} date={date} />
    </div>
  );
}

export default DailyTodo;
