import classes from "./hamburger.module.scss";

const Hamburger = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.right}>
        <div className={classes.right__burger} />
      </div>
    </div>
  );
};

export default Hamburger;
