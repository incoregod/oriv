const SideBarComponent = ({ children, position, type, width }) => {
  const display = type ? "visible" : "md:hidden";
  const widthSize = width ? width : "w-60";
  return (
    <div
      className={` justify-start items-start gap-10 flex flex-col text-gray-800 bg-white h-screen ${widthSize} absolute ${position.top} ${position.side} z-[60]  ${display} overflow-y-auto `}
    >
      {children}
    </div>
  );
};

export default SideBarComponent;
