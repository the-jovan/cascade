import Logo from "./Logo/Logo";
import classes from "./header.module.scss";

const Header = ({ scrolledFor }) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Logo scrolledFor={scrolledFor} />
      </div>
      <div className={classes.header__links}>Right thing</div>
    </header>
  );
};

export default Header;
