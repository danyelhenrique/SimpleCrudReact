import React from "react";
import Header from "./Header";
import { Main } from "./StyledMain";

export default props => (
  <React.Fragment>
    <Header {...props} />
    <Main className="content container-fluid">
      <div className="p-3 mt-3">{props.children}</div>
    </Main>
  </React.Fragment>
);
