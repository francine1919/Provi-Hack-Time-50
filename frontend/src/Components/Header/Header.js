import React from "react";
import { ContainerHeaderLogin } from "./styled";
import { Link } from "react-router-dom";
// import logo from ""
export default function Header() {
  return (
    <div>
      <ContainerHeaderLogin>
        {/* <img src={logo}/> */}
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/aboutus">
          <p>about us</p>
        </Link>
      </ContainerHeaderLogin>
    </div>
  );
}
