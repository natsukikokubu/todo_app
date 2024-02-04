import { ToggleTodo } from "./Todo";
import { Todo } from "../domains/todo";

type Props = {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
};

export const TodoList = (props: Props) => {
  return (
    <>
      {props.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <ToggleTodo
              todo={todo}
              todos={props.todos}
              setTodos={props.setTodos}
            />
          </div>
        );
      })}
    </>
  );
};
