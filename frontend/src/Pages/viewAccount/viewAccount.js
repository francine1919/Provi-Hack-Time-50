import React, { useState } from "react";
import Preview from "../../Assets/images/preview.png";
import Token from "../../Assets/images/token.png";
import User from "../../Assets/images/user.png";
import Header from "../../Components/Header/Header";
import { DivFoto, DivPrincipal, IMG } from "./styled";

export default function ViewAccount() {
  const [image, setImage] = useState(null)

  const dowloadImg = e => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div>
      <Header />
      <DivPrincipal>
        <DivFoto>
          <IMG src={image !== null ? image : User} />
          <input id="arquivo" accept=".png,.jpeg,.jpg" type='file' onChange={dowloadImg}></input>
        </DivFoto>

        <DivFoto>
          <h1>Anônimo</h1>
          <img src={Preview}/>
          <img src={Token}/>
        </DivFoto>

      </DivPrincipal>
    </div>
  );
}
