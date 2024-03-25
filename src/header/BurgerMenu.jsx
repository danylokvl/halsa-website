import { useEffect, useState } from "react";
import "./burgerMenu.less";

const BurgerMenu = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
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
