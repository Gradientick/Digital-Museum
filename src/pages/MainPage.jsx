import Content from "../MainPageComponents/Content";
import MainText from "../MainPageComponents/MainText";
import MenuButtons from "../MainPageComponents/MenuButtons";
import Footer from "../components/footer";
import { useState } from "react";
function MainPage() {
  const [content, setContent] = useState("Home");
  return (
    <>
      <div className="h-screen bg-whiteset">
        <MainText />
        <MenuButtons content={content} setContent={setContent} />
        <Content content={content} setContent={setContent} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
