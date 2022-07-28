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
  return (
    <div className="todo-container">
      {todosJSX.length > 0 ? (
        todosJSX
      ) : (
        <p className="todo-container__nothing-to-see">
          Nothing to see here yet... Add a task in the field above ☝️
        </p>
      )}
    </div>
  );
};

export default TodoContainer;
