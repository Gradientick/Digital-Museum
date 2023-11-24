function PresentContent() {
  return (
    <div className="bg-whiteset h-auto flex flex-col items-center">
      <div className="flex flex-col items-center p-20">
        <h1 className="font-serif  text-5xl font-medium">Present</h1>
        <p className="font-light text-lg">
          Discover the Present Times of Technology, Performances, Body and Self
          Image
        </p>
      </div>
      <div className=" bg-whiteset w-4/6 h-full p-3 shadow-xl m-5">
        <div className="font-light flex flex-col gap-2">
          <h1 className="font-medium text-2xl">Technology</h1>
          <p>
            The past laid the path of technology to advancement. Years of study
            and implementation of new discoveries have improved the technology
            to be more accessible and usable to people. We have now a lot of
            social platform like tiktok, instagram, etc. and almost anyone can
            accessed it.
          </p>
          <h1 className="font-medium text-xl">Body and Self Image</h1>
          <p>
            The past back then was harsh and cruel to Filipinos that some of
            them are so anxious and used to self hate but this present day, a
            lot of Filipinos learned to accept and ignore the societal standard
            and started to love who they are.
          </p>
          <h1 className="font-medium text-xl">Performances</h1>
          <p>
            Filipinos are on track of what is trending especially on what they
            saw in social media. When a trending topic popularized it's way on
            filipinos newsfeed, you can say that in the next consecutive days, a
            lot of them will be participating. There is also what we call a
            moment of Filipino pride whenever we, Filipinos, are recognized by
            others, mostly internationally.
          </p>

          <p>
            <span className="text-xl font-serif font-bold">I</span>n the current
            landscape of technological advancement, the evolution from a
            challenging past to a more accessible and user-friendly present has
            greatly impacted various aspects of society, including
            self-perception and cultural pride. The proliferation of social
            platforms like TikTok and Instagram has democratized content
            creation, allowing widespread access and participation. Moreover, as
            technology connects Filipinos to global trends, it serves as a
            catalyst for positive change in self-image. The harsh societal
            standards of the past, causing anxiety and self-hate, have given way
            to a present where many Filipinos embrace and love themselves,
            defying societal norms. The influence of trending topics on social
            media reflects the dynamic nature of Filipino engagement.
            Participation in these trends not only showcases the adaptability of
            Filipinos but also underscores their collective identity.
            Furthermore, moments of international recognition evoke a sense of
            national pride, highlighting the impact of technology on fostering a
            positive self-image and promoting cultural appreciation in the
            present day.
          </p>
        </div>
      </div>
      <div
        className=" bg-lavander flex justify-center w-full transition-all text-black hover:text-whiteset hover:cursor-pointer hover:bg-black"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <div className="m-2">Scroll to Top</div>
      </div>
    </div>
  );
}

export default PresentContent;
