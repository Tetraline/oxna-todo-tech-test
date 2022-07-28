import "./Todo.scss";
import { useState } from "react";

const Todo = ({ name, id, removeTodo }) => {
  const handleTrashClick = (event, key) => {
    removeTodo(event.target.parentNode.id);
  };
  return (
    <div id={id} className="todo">
      <input className="todo__checkbox" type="checkbox"></input>
      <p>{name}</p>
      <button className="todo__trash-button" onClick={handleTrashClick}>
        🗑️
      </button>
    </div>
  );
};

export default Todo;
