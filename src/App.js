import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <main className="app-container" id={theme}>
      <div className="todo-app">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
