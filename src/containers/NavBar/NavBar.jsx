import "./NavBar.scss";

const NavBar = ({ setTodos }) => {
  const handleResetClick = () => {
    setTodos([]);
  };
  return (
    <div className="nav-bar">
      <h1 className="nav-bar__heading">My Todos</h1>
      <button className="nav-bar__reset-button" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default NavBar;
