import "./InputArea.scss";

const InputArea = ({ addTodo }) => {
  const handleAddClick = (event) => {
    event.preventDefault();
    const todoText = event.target[0].value;
    if (todoText.length > 0) {
      addTodo({
        key: Date.now(),
        name: event.target[0].value,
        complete: false,
      });
      event.target[0].value = "";
    } else {
      alert("Please enter a todo!");
    }
  };
  return (
    <form onSubmit={handleAddClick} className="input-area">
      <input
        className="input-area__textbox"
        placeholder="Add your task here..."
      />
      <input className="input-area__submit" type="submit" value="+" />
    </form>

    //<div className="input-area">
    //  <form action=""></form>
    //  <input
    //    className="input-area__textbox"
    //    placeholder="Add your task here..."
    //  />
    //  <button className="input-area__submit" onClick={handleAddClick}>
    //    +
    //  </button>
    //</div>
  );
};

export default InputArea;
