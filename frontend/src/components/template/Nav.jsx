import React from "react";
import { Link } from "react-router-dom";

import { AsideNav } from "./StyledNav";

export default props => (
  <AsideNav>
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuários
      </Link>
    </nav>
  </AsideNav>
);
