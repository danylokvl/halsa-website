import { useEffect, useState } from "react";
import "./burgerMenu.less";

const BurgerMenu = () => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    let mobileNavContainer = document.querySelector(".header__mobileNavContainer");
    if (pressed) {
      mobileNavContainer.classList.toggle("active", pressed);
    } else mobileNavContainer.classList.toggle("active", pressed);
  }, [pressed]);

  return (
    <button
      title="button"
      className={pressed ? "header__burgerMenuButton pressed" : "header__burgerMenuButton"}
      onClick={() => setPressed(!pressed)}
    >
      <div className="header__burgerMenuLine" />
      <div className="header__burgerMenuLine" />
      <div className="header__burgerMenuLine" />
    </button>
  );
};

export default BurgerMenu;
