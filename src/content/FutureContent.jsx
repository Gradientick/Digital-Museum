function FutureContent() {
  return (
    <div className="bg-whiteset h-auto flex flex-col items-center">
      <div className="flex flex-col items-center p-20">
        <h1 className="font-serif  text-5xl font-medium">Future</h1>
        <p className="font-light text-lg">
          Take a Look on the Future Times of Technology, Performances, Body and
          Self Image
        </p>
      </div>
      <div className=" bg-whiteset w-4/6 h-full p-3 shadow-xl m-5">
        <div className="font-light flex flex-col gap-2">
          <h1 className="font-medium text-2xl">Technology</h1>
          <p>
            The research, innovations and advancement of the present stage of
            technology will aid the succession of future technology to be more
            accessible and stable in everyday life. Increase in social media
            applications and improvement on the flow of communication through
            digital platforms. New features and applications can happen.
          </p>
          <h1 className="font-medium text-xl">Body and Self Image</h1>
          <p>
            Normalizing Diversity. Disregarding society's beauty standard and
            gender stereotypes are the ones that are likely to happen in the
            future.
          </p>
          <h1 className="font-medium text-xl">Performances</h1>
          <p>
            Possibility of Filipinos being on top of the world population in
            creating trends on social media. In addition, Filipino movies and
            series are possible to be streamed internationally and become
            popular like k-dramas. This also raises the possibility that
            Filipino artists and culture will be more recognized
            internationally.
          </p>

          <p>
            <span className="text-xl font-serif font-bold">A</span>s we look
            ahead, the ongoing research, innovation, and advancements in
            technology are poised to shape a future where accessibility and
            stability become inherent features of everyday life. The
            proliferation of social media applications and enhanced digital
            communication platforms will undoubtedly lead to the emergence of
            novel features and applications, ushering in a new era of
            connectivity. In the realm of self-image, a promising future
            envisions the normalization of diversity, challenging and
            disregarding society's conventional beauty standards and gender
            stereotypes. This transformative shift is likely to empower
            individuals to embrace their unique identities and foster a more
            inclusive societal outlook. Furthermore, the potential for Filipinos
            to lead the global population in creating trends on social media
            opens doors to cultural recognition and influence. The prospect of
            Filipino movies and series streaming internationally, gaining
            popularity akin to K-dramas, suggests a future where the rich
            tapestry of Filipino artistry and culture resonates on a global
            scale. This foretells an era where Filipino artists and their
            contributions are not just acknowledged but celebrated
            internationally, adding vibrancy and diversity to the global
            cultural landscape.
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

export default FutureContent;
