import MainText from "../MainPageComponents/MainText";
import MenuButtons from "../MainPageComponents/MenuButtons";
function MainPage() {
  return (
    <>
      <div className="h-screen bg-white">
        <MainText />
        <MenuButtons />
      </div>
    </>
  );
}

export default MainPage;
