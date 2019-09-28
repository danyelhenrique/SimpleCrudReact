import logo from "../../assets/imgs/logo.jpg";
import React from "react";
import { Link } from "react-router-dom";
import { Aside } from "./StyledLogo";

export default props => (
  <Aside>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </Aside>
);
// 


