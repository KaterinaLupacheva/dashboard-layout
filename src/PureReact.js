import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./pure-react.css";

const PureReact = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <div className="icon" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <ArrowBackIcon /> : <MenuIcon />}
        </div>
        <div className="header-title">Header</div>
      </div>
      <div className="container">
        <aside className={`${isOpened ? "opened" : ""} drawer`}>Drawer</aside>
        <main className="main">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </main>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default PureReact;
