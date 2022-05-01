import React from "react";
import { ContainerHeaderLogin, ContainerNavigation } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
export default function Header() {
  return (
    <div>
      <ContainerHeaderLogin>
        <Link to="/">
          <img src={logo} />
        </Link>
        <ContainerNavigation>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <p>Home</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/aboutus"
          >
            <p>Sobre nós</p>
          </Link>
        </ContainerNavigation>
      </ContainerHeaderLogin>
    </div>
  );
}
