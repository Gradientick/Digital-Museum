import waxing from "../images/waxing.jpg";
import gloc from "../images/opmartist.jpg";
import comshop from "../images/comshop.jpg";
function First({ content, setContent }) {
  return (
    <div className=" bg-whiteset">
      <div className="flex flex-col text-center items-center p-20 gap-1">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          Explore: 2007 - 2010
        </h1>
        <p className=" font-light text-lg">
          Unveiling the Late 2000s: Trends, Triumphs, and Transformations
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-center justify-evenly bg-whiteset h-3/5">
          <div className=" w-3/5 text-justify md:w-4/5 gap-7 ">
            <p className=" font-bold">Body Shape</p>
            <p>
              The traditional concerns about weight and appearance, Filipinos
              also began to experience new body image issues during this time.
              For example, there was a growing concern about body hair,
              particularly among women. This was due in part to the popularity
              of Brazilian waxing, which became widely available in the
              Philippines
            </p>
          </div>
          <div className="h-5/6 w-8/12 md:w-2/12 shadow-none justify-center items-center relative">
            <img
              src={waxing}
              alt="image of brazilian waxing"
              className="h-full w-full "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly bg-whiteset h-3/5">
          <div className=" w-3/5 text-justify md:w-4/5 gap-7 ">
            <p className=" font-bold"> Pinoy OPM</p>
            <p>
              Original Pilipino Music (OPM) experienced a resurgence during this
              period, with artists such as Bamboo, The Eraserheads, and Parokya
              ni Edgar becoming popular. Korean pop (K-pop) also began to gain
              popularity in the Philippines during this time, with groups such
              as Super Junior and Girls' Generation becoming top acts. Hip hop
              also became increasingly popular in the Philippines, with artists
              such as Gloc-9 and Francis Magalona gaining mainstream success. (A
              number of popular Filipino television shows were aired during this
              period, including ""Eat Bulaga!,"" ""Wowowee!,"" and ""ASAP.""
              Several Filipino films were also released during this time,
              including ""Praybeyt Benjamin,"" ""A Very Special Love,"" and ""In
              My Life."" A number of Filipino celebrities rose to prominence
              during this period, including John Lloyd Cruz, Marian Rivera, and
              Sarah Geronimo.)
            </p>
          </div>
          <div className="h-5/6 w-8/12 md:w-2/12 shadow-none justify-center items-center relative ">
            <img src={gloc} alt="image of glock 9" className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly bg-whiteset h-3/5">
          <div className=" w-3/5 text-justify md:w-4/5 gap-7 ">
            <p className=" font-bold">Cybercafes</p>
            <p>
              The use of the Internet in the Philippines grew rapidly during
              this period, with the number of Internet users increasing from 12
              million in 2006 to 24 million in 2010. Social media platforms such
              as Facebook and Twitter also became popular in the Philippines
              during this time. The use of mobile phones also increased
              significantly during this period, with the number of mobile phone
              users increasing from 50 million in 2006 to 75 million in 2010.
            </p>
          </div>
          <div className="h-5/6 w-8/12 md:w-2/12 shadow-none justify-center items-center relative">
            <img
              src={comshop}
              alt="image of comshop"
              className="h-full w-full "
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-9 gap-7">
          <p className="w-5/5 text-justify md:w-5/5">
            Over all, between 2007 and 2010, there was a boom era of fashion
            trends, the adoption of western culture, and the evolution of
            technology that shaped the world industry.
          </p>
        </div>
        <div
          className=" bg-lavander flex justify-center transition-all text-black hover:text-whiteset hover:cursor-pointer hover:bg-black"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setContent("Home");
          }}
        >
          <div className="m-2">Back to Home</div>
        </div>
      </div>
    </div>
  );
}

export default First;
