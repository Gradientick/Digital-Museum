function MenuButtons({ content, setContent }) {
  return (
    <div className=" h-12  menuBorder flex justify-evenly menuborder">
      <div
        className="h-full flex justify-center  items-center w-24 sideborder transition-all bg-none hover:bg-lavander cursor-pointer"
        onClick={() => {
          setContent("Home");
        }}
      >
        Home
      </div>
      <div
        className="h-full flex justify-center  items-center w-24 sideborder transition-all bg-none hover:bg-lavander cursor-pointer"
        onClick={() => {
          setContent("About");
        }}
      >
        About
      </div>
      <div
        className="h-full flex justify-center  items-center w-24 sideborder transition-all bg-none hover:bg-lavander cursor-pointer"
        onClick={() => {
          setContent("Creators");
        }}
      >
        Creators
      </div>
      <div
        className="h-full flex justify-center items-center w-24 sideborder transition-all bg-none hover:bg-lavander cursor-pointer"
        onClick={() => {
          setContent("Present");
        }}
      >
        Present
      </div>
      <div
        className="h-full flex justify-center items-center w-24 sideborder transition-all bg-none hover:bg-lavander cursor-pointer"
        onClick={() => {
          setContent("Future");
        }}
      >
        Future
      </div>
    </div>
  );
}

export default MenuButtons;
