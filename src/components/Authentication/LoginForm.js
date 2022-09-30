import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <section className={classes.section}>
      <Card>
        <Button onClick={props.onLogin}>Login</Button>
      </Card>
    </section>
  );
};

export default LoginForm;
