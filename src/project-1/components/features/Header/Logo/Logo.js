import classes from "./logo.module.scss";

const Logo = ({ scrolledFor }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.circle}>
        <svg
          className={classes.circle__svg}
          style={{ transform: "rotate(-" + scrolledFor / 10 + "deg)" }}
        >
          <path
            d="M 50, 50 m -50, 0 a 50, 50 0 1, 0 100, 0 a 50,50 0 1,0 -100, 0"
            id="curve"
            fill="transparent"
          />

          <text>
            <textPath xlinkHref="#curve" textLength="300">
              Para pacientes, familia y sociedad
            </textPath>
          </text>
        </svg>
        <div className={classes.circle__arrow} />
      </div>

      <h1 className={classes.name}>
        Guía
        <br />
        de Cirugía
        <br />
        Cardíaca
      </h1>
    </div>
  );
};

export default Logo;
