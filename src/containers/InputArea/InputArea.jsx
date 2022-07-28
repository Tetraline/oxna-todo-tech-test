import "./InputArea.scss";

const InputArea = ({ addTodo }) => {
  const handleAddClick = (event) => {
    addTodo({
      key: Date.now(),
      name: event.target.previousSibling.value,
      complete: false,
    });
    event.target.previousSibling.value = "";
  };
  return (
    <div className="input-area">
      <input
        className="input-area__textbox"
        placeholder="Add your task here..."
      />
      <button className="input-area__submit" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
};

export default InputArea;
