import { useRef } from "react";

const ScrollableButton = ({ className, children }) => {
  const blockRef = useRef(null);
  return (
    <button className={className}>
      <div
        ref={blockRef}
        onMouseEnter={() => (blockRef.current.scrollTop += 15)}
        onMouseLeave={() => (blockRef.current.scrollTop -= 15)}
      >
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default ScrollableButton;
