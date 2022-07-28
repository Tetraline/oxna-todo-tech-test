import "./Todo.scss";
import { useState } from "react";

const Todo = ({ name, id, removeTodo }) => {
  const [complete, setComplete] = useState(false);
  const handleTrashClick = (event) => {
    removeTodo(event.target.parentNode.id);
  };
  const handleCheckBoxChange = (event) => {
    setComplete(event.target.checked);
  };

  return (
    <div id={id} className={complete ? "todo todo--complete" : "todo"}>
      <input
        className="todo__checkbox"
        type="checkbox"
        onClick={handleCheckBoxChange}
      ></input>
      <p>{name}</p>
      <button className="todo__trash-button" onClick={handleTrashClick}>
        🗑️
      </button>
    </div>
  );
};

export default Todo;
