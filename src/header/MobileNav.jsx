import "./mobileNav.less";

const MobileNav = () => {
  return (
    <nav className="header__mobileNavContainer">
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
      </ul>
    </nav>
  );
};

export default MobileNav;
