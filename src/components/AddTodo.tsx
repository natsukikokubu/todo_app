import { useRef } from "react";
import { Todo } from "../domains/todo";

type Props = {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
};

export const AddTodo = (props: Props) => {
  const taskText = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (taskText.current === null) return;
    if (taskText.current.value === "") return alert("Todoを入力してください!");
    let todo = { id: 0, task: taskText.current.value, completed: false };
    if (props.todos.length === 0) {
      todo.id = 1;
    } else {
      todo.id = props.todos.length + 1;
    }
    const newTodos: Todo[] = [...props.todos, todo];
    props.setTodos(newTodos);
    taskText.current.value = "";
  };
  return (
    <>
      <div>
        <input
          className="inputTodo"
          type="text"
          placeholder="Todoを追加"
          ref={taskText}
        />
        <button onClick={addTodo}>追加</button>
      </div>
    </>
  );
};
