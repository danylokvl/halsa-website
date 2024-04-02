import { useRef } from "react";

import "./header.less";
import logo from "../assets/icons/logo.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import ScrollableButton from "../components/ScrollableButton";
import BurgerMenu from "./BurgerMenu";
import HiddenNav from "../components/hiddenNav/HiddenNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const hiddenNavRef = useRef(null);
  const pagesButtonRef = useRef(null);

  const pagesButtonHandleMouseLeave = (event) => {
    const pagesButtonRect = pagesButtonRef.current.getBoundingClientRect();
    event.clientY >= pagesButtonRect.bottom
      ? (hiddenNavRef.current.style.display = "grid")
      : (hiddenNavRef.current.style.display = "none");
  };

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
            <button
              ref={pagesButtonRef}
              className="header__navButton"
              id="pagesButton"
              aria-controls="hiddenNav"
              onMouseEnter={() => (hiddenNavRef.current.style.display = "grid")}
              onMouseLeave={pagesButtonHandleMouseLeave}
            >
              Pages
              <img src={arrowDown} alt="arrowDown" />
            </button>
          </li>
        </ul>
        <div className="header__rightBlock">
          <button className="header__cartButton">0</button>
          <ScrollableButton className="header__signUpButton">Sign Up</ScrollableButton>
        </div>
        <BurgerMenu />
      </nav>
      <HiddenNav hiddenNavRef={hiddenNavRef} />
      <MobileNav />
    </header>
  );
};

export default Header;
