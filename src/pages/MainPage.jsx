import Content from "../MainPageComponents/Content";
import MainText from "../MainPageComponents/MainText";
import MenuButtons from "../MainPageComponents/MenuButtons";
import { useState } from "react";
function MainPage() {
  const [content, setContent] = useState("Home");
  return (
    <>
      <div className="h-screen bg-whiteset">
        <MainText />
        <MenuButtons content={content} setContent={setContent} />
        <Content content={content} setContent={setContent} />
      </div>
    </>
  );
}

export default MainPage;
