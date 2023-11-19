function CreatorsContent() {
  return (
    <div className="bg-whiteset h-4/5">
      <div className="flex flex-col justify-center items-center p-20 gap-2">
        <h1 className="font-serif  text-5xl font-medium">Creators</h1>
        <p className=" font-light text-lg">The Visionaries Behind Our Museum</p>
      </div>
      <div className="flex justify-evenly m-5">
        <div className="h-5/6 w-2/12 justify-center items-center flex flex-col p-3 rounded-sm gap-2 transition-all shadow-2xl hover:cursor-pointer">
          <img
            src="../../creatorimages/luis.jpg"
            alt="image of Manny Pacquiao"
            className=""
          />
          <h1 className=" text-black text-2xl ">Luis Camus</h1>
        </div>
        <div className="h-5/6 w-2/12 justify-center items-center flex flex-col p-3 rounded-sm gap-2 transition-all shadow-2xl hover:cursor-pointer">
          <img
            src="../../creatorimages/ab.png"
            alt="image of Abegail Clemente"
            className="h-full w-full "
          />
          <h1 className=" text-black text-2xl ">Abegail Clemente</h1>
        </div>
        <div className="h-5/6 w-2/12  justify-center items-center flex flex-col p-3 rounded-sm gap-2 transition-all shadow-2xl hover:cursor-pointer">
          <img
            src="../../creatorimages/jp.png"
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
