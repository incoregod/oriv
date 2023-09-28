const SideBarComponent = ({ children, position }) => {
  return (
    <div
      className={` justify-start items-start gap-10 flex flex-col text-gray-800 bg-white h-screen w-60 fixed ${position.top} ${position.side} z-40  md:hidden overflow-y-auto py-12`}
    >
      {children}
    </div>
  );
};

export default SideBarComponent;
