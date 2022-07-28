import "./TodoContainer.scss";
import Todo from "../../components/Todo/Todo";

const TodoContainer = ({ todos, removeTodo }) => {
  const todosJSX = todos.map((todo) => (
    <Todo
      key={todo.key}
      id={todo.key}
      removeTodo={removeTodo}
      name={todo.name}
    />
  ));
  return <div className="todo-container">{todosJSX}</div>;
};

export default TodoContainer;
