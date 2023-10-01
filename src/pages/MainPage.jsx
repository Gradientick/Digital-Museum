function MainPage() {
  return (
    <>
      <div className="h-screen bg-darkestblue">
        <div className=" h-24 bg-lightblue flex  items-center justify-between p-2 md:p-7 sticky top-0 w-screen">
          <h1 className="text-3xl text-hightext">Philippine Popular Culture</h1>

          <h2 className="text-hightext underline">References</h2>
        </div>
        <div className=" h-1/3 flex flex-col gap-2 items-center justify-center">
          <div className="under p-3">
            <h1 className="text-white text-5xl">Digital Museum</h1>
          </div>
          <h1 className="text-white">Decade 2000 - 2010</h1>
        </div>
        <div className="flex flex-col height gap-3">
          <div className=" h-2/4 bg-darkerblue flex justify-center items-center m-0 md:m-2">
            <h1 className="text-white text-xl">2000-2003</h1>
          </div>
          <div className=" h-2/4 bg-darkerblue flex justify-center items-center m-0 md:m-2">
            <h1 className="text-white text-xl">2000-2003</h1>
          </div>
          <div className=" h-2/4 bg-darkerblue flex justify-center items-center m-0 md:m-2">
            <h1 className="text-white text-xl">2000-2003</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
