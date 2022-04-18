import classes from "./button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <Link to={link} className={classes.button}>
      {text}
    </Link>
  );
};

export default Button;
