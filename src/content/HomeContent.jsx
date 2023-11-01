function HomeContent({ content, setContent }) {
  return (
    <div className=" bg-whiteset h-4/5">
      <div className="flex flex-col items-center p-20  gap-1">
        <h1 className="font-serif  text-5xl font-medium">Explore</h1>
        <p className=" font-light text-lg">
          Unearth the Evolution of Culture: A Journey Through the 2000s
        </p>
      </div>
      <div className="flex justify-evenly bg-whiteset h-3/5">
        <div
          className="h-5/6 w-2/12 shadow-none justify-center items-center relative transition-all hover:shadow-2xl hover:cursor-pointer"
          onClick={() => setContent("2000-2003")}
        >
          <img
            src="../../images/pacman.jpg"
            alt="image of Manny Pacquiao"
            className="h-full w-full brightness-50"
          />
          <h1 className=" text-whiteset absolute inset-0 flex items-center justify-center text-white text-2xl ">
            2000 - 2003
          </h1>
        </div>
        <div
          className="h-5/6 w-2/12 shadow-none justify-center items-center relative transition-all hover:shadow-2xl hover:cursor-pointer"
          onClick={() => setContent("2004-2006")}
        >
          <img
            src="../../images/jejejeje-gang.jpg"
            alt="image of jeje gang"
            className="h-full brightness-50"
          />
          <h1 className=" text-whiteset absolute inset-0 flex items-center justify-center text-white text-2xl ">
            2004 - 2006
          </h1>
        </div>
        <div
          className="h-5/6 w-2/12 shadow-none justify-center items-center relative transition-all hover:shadow-2xl hover:cursor-pointer"
          onClick={() => setContent("2007-2010")}
        >
          <img
            src="../../images/bpo2.jpg"
            alt="image showing people working in the BPO industry"
            className="h-full brightness-50"
          />
          <h1 className=" text-whiteset absolute inset-0 flex items-center justify-center text-white text-2xl transition-all">
            2007 - 2010
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
