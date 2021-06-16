import React from "react";
import Button from "./Button";
const Header = ({ title, setShowTask, showTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button name="Add" setShowTask={setShowTask} showTask={showTask} />
    </header>
  );
};

Header.defaultProps = {
  title: "Mr Lemon is here",
};
export default Header;
