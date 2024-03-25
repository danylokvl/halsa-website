import "./header.less";
import logo from "./img/logo.svg";
import ScrollableButton from "../components/ScrollableButton";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo} />
        <ul className="header__navButtonsList">
          <li>
            <button className="header__navButton">Features</button>
          </li>
          <li>
            <button className="header__navButton">About</button>
          </li>
          <li>
            <button className="header__navButton">Members</button>
          </li>
          <li>
            <button className="header__navButton">Pricing</button>
          </li>
          <li>
            <button className="header__navButton">Blog</button>
          </li>
          <li>
            <button className="header__navButton">Pages</button>
          </li>
        </ul>
        <div className="header__rightBlock">
          <button className="header__cartButton">0</button>
          <ScrollableButton className="header__signUpButton">Sign Up</ScrollableButton>
        </div>
        <BurgerMenu />
      </nav>
    </header>
  );
};

export default Header;
