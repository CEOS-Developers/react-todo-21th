import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/Calender";
import DailyPage from "./pages/DailyTodo";
import "./pages/appFont.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/dailyTodo/:date" element={<DailyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;