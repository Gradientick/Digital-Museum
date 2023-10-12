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
        <div className=" bg-black h-5/6 w-2/12">Block 1</div>
        <div className=" bg-black h-5/6 w-2/12">Block 2</div>
        <div className=" bg-black h-5/6 w-2/12"> Block 3</div>
      </div>
    </div>
  );
}

export default HomeContent;
