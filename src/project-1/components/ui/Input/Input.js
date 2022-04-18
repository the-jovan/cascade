import classes from "./input.module.scss";

const Input = ({ placeholder }) => {
  return (
    <div className={classes.wrapper}>
      <input className={classes.input} placeholder={placeholder} />
      <div className={classes.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path
            fill="none"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            d="m 25.2 25.02 a 13.77 13.77 90 1 0 -0.18 0.18 l 15.3 15.3 m -8.19 -10.53 l 9.9 9.9 l -2.34 2.34 l -9.9 -9.9"
          />
        </svg>
      </div>
    </div>
  );
};

export default Input;
