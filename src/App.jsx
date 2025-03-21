import GlobalStyles from "@/styles/GlobalStyles";
import TodoListPage from "@/pages/TodoListPage";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { LightTheme, DarkTheme } from "@/styles/theme";

function App() {
  const localTheme = window.localStorage.getItem("theme" || "light");
  const [theme, setTheme] = useState(localTheme);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <TodoListPage toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default App;
