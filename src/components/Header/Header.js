import { useContext } from "react";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      {!ctx.isLoggedIn && <Button onClick={ctx.onLogin}>Login</Button>}
      {ctx.isLoggedIn && <Button onClick={ctx.onLogout}>Logout</Button>}
    </>
  );
};

export default Header;
