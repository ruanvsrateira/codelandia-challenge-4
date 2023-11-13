import { Fragment } from "react";
import { Main, SectionLeft, SectionRight } from "./styles";
import Banner from "./assets/images/banner.svg";

function App() {
  return (
    <Fragment>
      <Main>
        <SectionLeft>
          <img src={Banner} alt="Image with any user icons" />
        </SectionLeft>
        <SectionRight></SectionRight>
      </Main>
    </Fragment>
  );
}

export default App;
