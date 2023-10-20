function HomeContent() {
  return (
    <div className=" bg- h-4/5">
      <div className="flex flex-col items-center p-20  gap-1">
        <h1 className="font-serif  text-5xl font-medium">Explore</h1>
        <p className=" font-light text-lg">
          Unearth the Evolution of Culture: A Journey Through the 2000s
        </p>
      </div>
      <div className="flex justify-evenly bg-whiteset h-3/5">
        <div className=" bg-black h-5/6 w-2/12 justify-center items-center relative ">
          <img
            src="../../images/pacman.jpg"
            alt="image of Manny Pacquiao"
            className="h-full w-full brightness-50"
          />
          <h1 className=" text-whiteset absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            2000 - 2003
          </h1>
        </div>
        <div className=" bg-black h-5/6 w-2/12 justify-center items-center relative ">
          <img src="../../images/jejeje-gang.jpg" alt="image of jeje gang" />
        </div>
        <div className=" bg-black h-5/6 w-2/12"> Block 3</div>
      </div>
    </div>
  );
}

export default HomeContent;
