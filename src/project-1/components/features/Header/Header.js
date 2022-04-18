import classes from "./header.module.scss";
import Logo from "./Logo/Logo";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Hamburger from "../../ui/Hamburger/Hamburger";

const Header = ({ scrolledFor }) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Logo scrolledFor={scrolledFor} />
      </div>
      <div className={classes.header__links}>
        <Button text="Historia Sonora" link="podcasts" />
        <Input placeholder="Buscar tarjeta..." />
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
