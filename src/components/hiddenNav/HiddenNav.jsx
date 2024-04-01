import "./HiddenNav.less";
import Feedback from "../Feedback";
import feedbackImg1 from "../../assets/img/feedbackImg1.webp";

const HiddenNav = ({ hiddenNavRef }) => {
  return (
    <nav
      className="header__hiddenNav"
      id="hiddenNav"
      aria-hidden="true"
      aria-labelledby="pagesButton"
      style={{ display: "none" }}
      ref={hiddenNavRef}
      onMouseLeave={() => (hiddenNavRef.current.style.display = "none")}
    >
      <div className="header__hiddenNavLeftContainer">
        <Feedback
          additionalStyles={{ padding: "20px" }}
          title='"Halsa is a game-changer in my daily life."'
          img={feedbackImg1}
          imgAlt="Emma Thompson"
          name="Emma Thompson"
          starsCount={5}
        />
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
  );
};

export default HiddenNav;
