import HomeContent from "../content/HomeContent";
import AboutContent from "../content/AboutContent";
import CreatorsContent from "../content/CreatorsContent";
import ReferencesContent from "../content/ReferencesContent";
function Content({ content }) {
  switch (content) {
    case "Home":
      return <HomeContent />;
    case "About":
      return <AboutContent />;
    case "Creators":
      return <CreatorsContent />;
    case "References":
      return <ReferencesContent />;
  }
  // return <div className=" bg-develop h-4/5">Content</div>;
}

export default Content;
