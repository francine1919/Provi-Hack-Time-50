import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import { ContainerHeaderLogin, ContainerNavigation } from "./styled";
export default function Header() {
  return (
    <div>
      <ContainerHeaderLogin>
        <img src={logo} />
        <ContainerNavigation>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <p>Home</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/aboutus">
            <p>Sobre nós</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/map">
            <p>Mapa AQI</p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/account">
            <p>Meu perfil</p>
          </Link>
        </ContainerNavigation>
      </ContainerHeaderLogin>
    </div>
  );
}
