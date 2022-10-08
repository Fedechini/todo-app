import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="app-container">
      <div className="todo-app">
        <Header />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
