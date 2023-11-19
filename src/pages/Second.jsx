function Second({ content, setContent }) {
  return (
    <div className="bg-whiteset">
      <div className="flex flex-col items-center p-20 gap-1">
        <h1 className="font-serif  text-5xl font-medium">
          Explore: 2004 - 2006
        </h1>
        <p className=" font-light text-lg">
          Mid-2000s Marvels: Navigating Culture and Trends
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 m-6">
        <img
          src="src/images/filipino-fashion.jpg"
          alt="an image of the jejemon gang"
          className=" w-1/5 h-auto"
        />
        <h1 className=" font-medium">Show me the to-to be!</h1>
        <p className=" w-3/6 text-justify">
          In the year between 2004 to 2006. Fashion is what influenced every
          Filipino identity. They present themselves with these accumulated
          fashion trips that popularized within these years. Starting from the
          Jejemon, following the Kpop and Jpop influence until the Domo kun
          aesthetic.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 m-6">
        <img
          src="src/images/Encantadia.jpg"
          alt="an image of the jejemon gang"
          className=" w-2/5 h-auto"
        />
        <h1 className=" font-medium">Ako Si Ganito</h1>
        <p className=" w-3/6 text-justify">
          Philippine Tv shows completed the lifeline of every Filipino kid and
          adult. Just who are you among the encantadia gems keeper? That's the
          consistent question you will receive with your kalaro's. Encantadia
          first aired in 2005, among other films like Darna (2005), Panday
          (2005), etc. Because of these films, do you also remember the notebook
          covers that shows certain character in a show?
        </p>
      </div>
      <div className="flex flex-col items-center gap-6 m-6">
        <img
          src="src/images/iphone.jpg"
          alt="Photo of an iphone"
          className=" w-1/5 h-auto"
        />
        <h1 className=" font-medium">Build the Tech Culture</h1>
        <p className=" w-3/6 text-justify">
          Cell phones became popular with Filipinos. It’s a way to make things
          easier and to kill time! Popular games from cell phones back then like
          Tower Bloxx and racing games like The Fast & Furious entertained us.
          It is also the time where ICT is starting to get recognized.
        </p>
      </div>
      <div
        className=" bg-lavander flex justify-center transition-all text-black hover:text-whiteset hover:cursor-pointer hover:bg-black"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setContent("2007-2010");
        }}
      >
        <div className="m-2">Explore: 2007 - 2010</div>
      </div>
    </div>
  );
}

export default Second;
