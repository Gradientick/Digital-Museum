import luis from "../creatorimages/luis.png";
import ab from "../creatorimages/ab.png";
import jp from "../creatorimages/jp.png";
function CreatorsContent() {
  return (
    <div className="bg-whiteset h-5/5 md:h-4/5">
      <div className="flex flex-col justify-center items-center p-20 gap-2">
        <h1 className="font-serif  text-5xl font-medium">Creators</h1>
        <p className=" font-light text-lg text-center">
          The Visionaries Behind Our Museum
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly m-5 items-center">
        <div className="h-5/6 w-8/12 md:w-3/12 lg:w-2/12 justify-center items-center flex flex-col p-3 rounded-sm gap-2 transition-all shadow-2xl hover:cursor-pointer">
          <img src={luis} alt="image of Luis Camus" className="h-full w-full" />

          <h1 className=" text-black text-2xl ">Luis Camus</h1>
        </div>
        <div className="h-5/6 w-8/12 md:w-3/12 lg:w-2/12 justify-center items-center flex flex-col p-3 rounded-sm gap-2 transition-all shadow-2xl hover:cursor-pointer">
          <img
            src={ab}
            alt="image of Abegail Clemente"
            className="h-full w-full "
          />
          <h1 className=" text-black text-2xl ">Abegail Clemente</h1>
        </div>
        <div className="h-5/6 w-8/12 md:w-3/12 lg:w-2/12  justify-center items-center flex flex-col p-3 rounded-sm gap-2 transition-all shadow-2xl hover:cursor-pointer">
          <img
            src={jp}
            alt="image of Jaypee Marquez"
            className="h-full w-full "
          />
          <h1 className=" text-black text-2xl ">Jaypee Marquez</h1>
        </div>
      </div>
    </div>
  );
}

export default CreatorsContent;
