function First({ content, setContent }) {
  return (
    <div className=" bg-whiteset">
      <div className="flex flex-col items-center p-20 gap-1">
        <h1 className="font-serif  text-5xl font-medium">
          Explore: 2000 - 2003
        </h1>
        <p className=" font-light text-lg">
          Unveiling the Early 2000s: A Journey into Pop Culture and Trends
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-evenly bg-whiteset h-3/5">
          <div className="h-5/6 w-2/12 shadow-none justify-center items-center relative transition-all ">
            <img
              src="src/images/pacman.jpg"
              alt="image of Manny Pacquiao"
              className="h-full w-full "
            />
          </div>
          <div className=" w-2/5 flex flex-col gap-7">
            <p>
              Step back in time to the years 2000 to 2003, a pivotal period when
              the world was on the cusp of a new millennium, and pop culture was
              taking on a fresh and dynamic form. This era marked the rise of
              technology, the dawn of reality television, and the birth of
              iconic music and fashion trends. However, it wasn't just about
              trends and innovations; it was also a time when sportsmanship and
              cultural diversity took center stage. Among the notable figures
              who burst onto the global scene was Manny Pacquiao, a young boxer
              from the Philippines whose unparalleled skill and unwavering
              determination catapulted him to international stardom. Join us on
              a journey to explore the cultural phenomena, memorable moments,
              and extraordinary figures that shaped this exciting period in
              history
            </p>
            <p>
              During these years, the 2000s marked a transition from the analog
              to the digital age, with the rapid proliferation of the internet,
              mobile phones, and social media platforms. It was a time when the
              world became more interconnected than ever before, with the advent
              of platforms like MySpace and the launch of the first-generation
              iPod.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-9 gap-4">
          <h1 className="font-serif  text-2xl font-medium">
            Introduction of Friendster
          </h1>
          <div className="flex justify-evenly">
            <img src="src/images/Friendster.jpg" alt="image of Friendster" />
            <div className=" w-2/5">
              <p>
                Friendster, the pioneering social networking platform that
                emerged in the early 2000s, holds a special place in the hearts
                of many Filipinos. During its heyday, Friendster became a
                virtual community where individuals across the Philippines could
                connect, share their lives, and forge new friendships online.
                Its unique features, such as customizable profiles and the
                'Friendster testimonial,' allowed users to express themselves
                and communicate in novel ways. Filipinos embraced Friendster
                with unparalleled enthusiasm, making it a cultural phenomenon in
                the country. The platform played a significant role in shaping
                the way Filipinos connected and interacted on the internet,
                fostering a sense of camaraderie and connectivity that left a
                lasting impact on their online experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-9 gap-7">
          <h1 className="font-serif  text-2xl font-medium">
            Increase In Mobile Phone Adoption Throughout The Philippines
          </h1>
          <div className="flex justify-evenly">
            <img src="src/images/mobilephone.jpg" alt="" />
            <p className=" w-2/5">
              The 2000s witnessed a remarkable surge in mobile phone adoption
              throughout the Philippines, reshaping the way people communicated
              and connected in the archipelago. Mobile phones, once considered a
              luxury, rapidly became a necessity and a ubiquitous part of daily
              life. This transformation was fueled by a combination of factors,
              including the availability of affordable mobile devices,
              competitive pricing for mobile plans, and the country's unique
              geography, which made mobile communication an ideal choice for
              bridging geographical gaps. Mobile phones not only provided
              Filipinos with a means of staying connected with their loved ones
              but also opened doors to new opportunities, including mobile
              banking and internet access, which improved accessibility to vital
              services. The rise in mobile phone adoption in the Philippines was
              emblematic of the country's embrace of technology and its
              determination to remain connected in an increasingly digital
              world.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-9 gap-7">
          <h1 className="font-serif  text-2xl font-medium">
            Fame of Sexbomb Girls
          </h1>
          <div className="flex justify-evenly">
            <img
              src="src/images/sexbomb.png"
              alt="a photo of sexbomb girls"
              className="h-auto w-1/5"
            />
            <p className=" w-2/5">
              The SexBomb Girls were more than just a dance group; they were a
              cultural phenomenon that reshaped the landscape of Philippine
              popular culture during the early 2000s. With their captivating
              performances, infectious dance moves, and magnetic presence, they
              became a source of joy and empowerment for Filipinos of all ages.
              The SexBomb Girls not only brought their unique brand of
              entertainment to the stage but also transcended it, using their
              platform to inspire and empower women across the country. They
              became symbols of confidence, talent, and camaraderie, showing
              that women could take center stage and shine in a male-dominated
              industry. Their influence extended beyond the entertainment world,
              leaving a lasting legacy that celebrates the spirit of fun,
              empowerment, and unity. The SexBomb Girls are a testament to the
              power of art and entertainment to shape and reflect the culture of
              a nation.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-9 gap-7">
          <p className="w-4/5">
            As we bid farewell to the years 2000 to 2003, we leave behind a
            trail of innovation, cultural shifts, and memorable figures that
            have indelibly marked this era. The early 2000s were a time of
            transition, ushering us into the digital age while embracing the
            vibrancy of diverse cultural phenomena. From the iconic rise of
            Manny Pacquiao to the virtual camaraderie fostered by Friendster,
            these years encapsulated the spirit of change and connection. The
            surge in mobile phone adoption reshaped the Filipino experience,
            bridging geographical gaps and opening doors to newfound
            opportunities. Meanwhile, the infectious performances of the SexBomb
            Girls not only entertained but inspired, leaving an enduring legacy
            of empowerment and unity. As we move forward in our journey through
            the decades, let's carry with us the lessons and memories of the
            early 2000s—a period that laid the foundation for the dynamic and
            interconnected world we live in today. Stay tuned as we unravel more
            chapters of the past and continue our exploration of the rich
            tapestry of 2000s to 2010 popular culture.
          </p>
        </div>
        <div
          className=" bg-lavander flex justify-center transition-all text-black hover:text-whiteset hover:cursor-pointer hover:bg-black"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setContent("2004-2006");
          }}
        >
          <div className="m-2">Explore: 2004 - 2006</div>
        </div>
      </div>
    </div>
  );
}

export default First;
