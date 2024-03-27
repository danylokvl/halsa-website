import "./header.less";
import logo from "./img/logo.svg";
import hiddenNavImg from "./img/hiddenNavImg.webp";
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
      <nav className="header__hiddenNav">
        <div className="header__hiddenNavLeftContainer">
          <img src={hiddenNavImg} />
        </div>
        <div className="header__hiddenNavLinksContainer">
          <div className="header__hiddenNavLinksList">
            <h6>Pages</h6>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="header__hiddenNavLinksList">
            <h6>CMS</h6>
            <ul>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Blog Single</a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Jobs Single</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
            </ul>
          </div>
          <div className="header__hiddenNavLinksList">
            <h6>Utility Pages</h6>
            <ul>
              <li>
                <a>404 Error Page</a>
              </li>
              <li>
                <a>Password Protected</a>
              </li>
              <li>
                <a>Styleguide</a>
              </li>
              <li>
                <a>Licensing</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
