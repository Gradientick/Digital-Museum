import HomeContent from "../content/HomeContent";
import AboutContent from "../content/AboutContent";
import CreatorsContent from "../content/CreatorsContent";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";
import PresentContent from "../content/PresentContent";
import FutureContent from "../content/FutureContent";
function Content({ content, setContent }) {
  switch (content) {
    case "Home":
      return <HomeContent content={content} setContent={setContent} />;
    case "About":
      return <AboutContent />;
    case "Creators":
      return <CreatorsContent />;
    case "Present":
      return <PresentContent />;
    case "2000-2003":
      return <First content={content} setContent={setContent} />;
    case "2004-2006":
      return <Second content={content} setContent={setContent} />;
    case "2007-2010":
      return <Third content={content} setContent={setContent} />;
    case "Future":
      return <FutureContent content={content} setContent={setContent} />;
  }
  // return <div className=" bg-develop h-4/5">Content</div>;
}

export default Content;
