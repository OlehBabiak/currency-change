import classes from "./Header.module.css";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
          <div>$ 39.5</div>
          <div>Є 40.0</div>
      </header>
    </Fragment>
  );
};

export default Header;
