import React from "react";
import "./App.css";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";
import Todo from "./components/Todo";
function App() {
  return (
    <div className="todo-app">
      <Todolist />
    </div>
  );
}

export default App;
