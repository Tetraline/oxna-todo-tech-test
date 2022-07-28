import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import InputArea from "./containers/InputArea/InputArea";
import TodoContainer from "./containers/TodoContainer/TodoContainer";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <NavBar setTodos={setTodos} />
      <InputArea setTodos={setTodos} />
      <TodoContainer todos={todos} />
    </>
  );
};

export default App;
