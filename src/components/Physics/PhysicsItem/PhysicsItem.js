import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./PhysicsItem.module.css";

const PhysicsItem = (props) => {
  const handleUseFormula = (e) => {};
  return (
    <Card className={classes.card}>
      <h1>{props.name}</h1>
      <h4>{props.equation}</h4>
      <p>{props.description}</p>
      <Button onClick={handleUseFormula}>Use Formula</Button>
    </Card>
  );
};

export default PhysicsItem;
