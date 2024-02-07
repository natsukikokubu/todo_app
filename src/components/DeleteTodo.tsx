import { Todo } from "../domains/todo";

type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export const DeleteTodo = (props: Props) => {
  const deleteTodo = () => {
    const inProgressTodos: Todo[] = props.todos.filter(
      (todo) => !todo.completed
    );
    let idCount = 1;
    inProgressTodos.forEach((todo) => {
      todo.id = idCount;
      idCount++;
    });
    props.setTodos(inProgressTodos);
  };
  return (
    <>
      <button onClick={deleteTodo}>完了したTodoを削除</button>
    </>
  );
};
