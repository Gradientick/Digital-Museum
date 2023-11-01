import HomeContent from "../content/HomeContent";
import AboutContent from "../content/AboutContent";
import CreatorsContent from "../content/CreatorsContent";
import ReferencesContent from "../content/ReferencesContent";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";
function Content({ content, setContent }) {
  switch (content) {
    case "Home":
      return <HomeContent content={content} setContent={setContent} />;
    case "About":
      return <AboutContent />;
    case "Creators":
      return <CreatorsContent />;
    case "References":
      return <ReferencesContent />;
    case "2000-2003":
      return <First />;
    case "2004-2006":
      return <Second />;
    case "2007-2010":
      return <Third />;
  }
  // return <div className=" bg-develop h-4/5">Content</div>;
}

export default Content;
