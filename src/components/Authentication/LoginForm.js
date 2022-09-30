import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <Card className={classes.login}>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="email">E-Mail</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <div className={classes.actions}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
