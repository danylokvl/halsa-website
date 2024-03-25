import { useState } from "react";

const ScrollableButton = ({ className, children, onClick }) => {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <button className={className} onClick={onClick}>
      <div onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
        <span className={mouseOn ? "mouseOn" : null}>{children}</span>
        <span className={mouseOn ? "mouseOn" : null}>{children}</span>
      </div>
    </button>
  );
};

export default ScrollableButton;
