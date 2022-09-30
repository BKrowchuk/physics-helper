import { useContext } from "react";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          {!ctx.isLoggedIn && <Button onClick={ctx.onLogin}>Login</Button>}
          {ctx.isLoggedIn && <Button onClick={ctx.onLogout}>Logout</Button>}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
