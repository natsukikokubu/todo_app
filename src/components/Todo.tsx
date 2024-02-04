import { Todo } from "../domains/todo";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
};

export const ToggleTodo = (props: Props) => {
  const toggleTodo = () => {
    const newtodos: Todo[] = props.todos.map((todo) => {
      if (todo.id === props.todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    props.setTodos(newtodos);
  };
  return (
    <>
      <div>
        <input
          id={String(props.todo.id)}
          type="checkbox"
          checked={props.todo.completed}
          onChange={toggleTodo}
          readOnly
        />
        <label htmlFor={String(props.todo.id)}>
          Todo{props.todo.id} : {props.todo.task}
        </label>
      </div>
    </>
  );
};
