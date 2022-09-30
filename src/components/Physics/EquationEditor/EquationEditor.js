import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./EquationEditor.module.css";

const EquationEditor = (props) => {
  const handleClose = (e) => {
    props.onClose();
  };

  const calculateHandler = (event) => {
    event.preventDefault();
    props.onClose();
    // convert equations to actual use?
    // generate as many number inputs as equation needs?

    // calculate button
    // close button
  };

  return (
    <Card>
      <form onSubmit={calculateHandler}>
        <Input id="email" label="Velocity" type="number" />
        <Input id="email2" label="Time" type="number" />

        <div className={classes.actions}>
          <Button type="submit">Calculate</Button>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </form>
    </Card>
  );
};

export default EquationEditor;
