import classes from "./PhysicsList.module.css";
import Card from "../UI/Card";
import PhysicsItem from "./PhysicsItem/PhysicsItem";

const DUMMY_ITEMS = [
  {
    name: "Distance",
    equation: "d = vt",
    description:
      "This calculates the distance, d, moved given time, t, and average velocity, v.",
  },
  {
    name: "Time",
    equation: "t = d/v",
    description:
      "This calculates the time, t, it would take to move a given distance, d, at an average velocity, v.",
  },
];

const PhysicsList = () => {
  return (
    <section className={classes.section}>
      <Card>
        {DUMMY_ITEMS.map((item) => {
          return (
            <PhysicsItem
              key={item.equation}
              name={item.name}
              equation={item.equation}
              description={item.description}
            />
          );
        })}
      </Card>
    </section>
  );
};

export default PhysicsList;
