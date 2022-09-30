import Card from "../../UI/Card";
import Button from "../../UI/Button";
import EquationEditor from "../EquationEditor/EquationEditor";
import classes from "./PhysicsItem.module.css";
import React, { useState } from "react";

const PhysicsItem = (props) => {
  const [usingFormula, setUsingFormula] = useState(false);
  const handleUseFormula = () => {
    setUsingFormula(true);
  };

  const handleClose = () => {
    setUsingFormula(false);
  };

  return (
    <Card className={classes.card}>
      <h1>{props.name}</h1>
      <h4>{props.equation}</h4>
      <p>{props.description}</p>
      {usingFormula && <EquationEditor onClose={handleClose} />}
      {!usingFormula && <Button onClick={handleUseFormula}>Use Formula</Button>}
    </Card>
  );
};

export default PhysicsItem;
