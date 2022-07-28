import "./InputArea.scss";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";

const InputArea = ({ addTodo }) => {
  const [showAlert, setShowAlert] = useState(false);
  const handleAddClick = (event) => {
    event.preventDefault();
    const todoText = event.target[0].value;
    if (todoText.length > 0) {
      addTodo({
        key: Date.now(),
        name: event.target[0].value,
      });
      event.target[0].value = "";
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };
  return (
    <>
      <form onSubmit={handleAddClick} className="input-area">
        <input
          className="input-area__textbox"
          placeholder="Add your task here..."
        />
        <input className="input-area__submit" type="submit" value="+" />
      </form>
      {showAlert && <Alert />}
    </>
  );
};

export default InputArea;
