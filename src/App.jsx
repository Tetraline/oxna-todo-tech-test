import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import InputArea from "./containers/InputArea/InputArea";
import TodoContainer from "./containers/TodoContainer/TodoContainer";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (key) => {
    const newTodos = [...todos];
    newTodos.splice(
      todos.findIndex((t) => +t.key === +key),
      1
    );
    setTodos(newTodos);
  };

  return (
    <>
      <NavBar setTodos={setTodos} />
      <InputArea addTodo={addTodo} />
      <TodoContainer todos={todos} removeTodo={removeTodo} />
    </>
  );
};

export default App;
