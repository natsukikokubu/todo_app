import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { DeleteTodo } from "./components/DeleteTodo";
import { Todo } from "./domains/todo";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <h1>Todoアプリ</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <p>残りのTodo件数: {todos.length}件</p>
      <DeleteTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}
