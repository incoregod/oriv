const Buttons = ({ children, bgColor, textColor, styles }) => {
  return (
    <button
      className={`border py-4 px-6 ${bgColor} ${textColor}  transition-all ease-in-out duration-300 ${styles} `}
    >
      {children}
    </button>
  );
};

export default Buttons;
