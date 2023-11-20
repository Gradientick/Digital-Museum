import pacman from "../images/pacman.jpg";
import jejegang from "../images/jejejeje-gang.jpg";
import bpo from "../images/bpo2.jpg";
function HomeContent({ content, setContent }) {
  return (
    <div className=" bg-whiteset h-5/5 md:h-full">
      <div className="flex flex-col items-center p-20  gap-1">
        <h1 className="font-serif  text-5xl font-medium">Explore</h1>
        <p className=" font-light text-lg text-center">
          Unearth the Evolution of Culture: A Journey Through the 2000s
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-evenly bg-whiteset h-3/5 gap-4 md:gap-1 m-4 md:m-1">
        <div
          className="h-3/6 w-full md:h-3/6 lg:h-5/6 lg:w-2/12 md:w-3/12 shadow-none justify-center items-center relative transition-all hover:shadow-2xl hover:cursor-pointer"
          onClick={() => setContent("2000-2003")}
        >
          <img
            src={pacman}
            alt="image of Manny Pacquiao"
            className="h-full w-full brightness-50"
          />
          <h1 className=" text-whiteset absolute inset-0 flex items-center justify-center text-white text-2xl ">
            2000 - 2003
          </h1>
        </div>
        <div
          className="h-3/6 w-full md:h-3/6 md:w-3/12 lg:w-2/12  lg:h-5/6 shadow-none justify-center items-center relative transition-all hover:shadow-2xl hover:cursor-pointer"
          onClick={() => setContent("2004-2006")}
        >
          <img
            src={jejegang}
            alt="image of jeje gang"
            className="h-full w-full brightness-50"
          />
          <h1 className=" text-whiteset absolute inset-0 flex items-center justify-center text-white text-2xl ">
            2004 - 2006
          </h1>
        </div>
        <div
          className="h-3/6 w-full md:h-3/6 md:w-3/12 lg:w-2/12 lg:h-5/6 shadow-none justify-center items-center relative transition-all hover:shadow-2xl hover:cursor-pointer"
          onClick={() => setContent("2007-2010")}
        >
          <img
            src={bpo}
            alt="image showing people working in the BPO industry"
            className="h-full w-full brightness-50"
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
