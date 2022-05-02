import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import {
  ContainerLogin,
  ContainerInputTerms,
  ContainerInput,
  ContainerButton,
  ContainerHr,
  ContainerLoginOnline,
} from "./styled";
import face from "../../Assets/images/face-icon.jpg";
import google from "../../Assets/images/google-icon.png";
import apple from "../../Assets/images/apple-icon.jpg";
export default function Login() {
  const navigate = useNavigate();

  //form
  const { form, onChangeForm, clearForm } = useForm({
    email: "",
    password: "",
  });
  const onLogin = (e) => {
    e.preventDefault();
  };

  //login endpoint
  const loginUser = () => {
    const body = form;
    const url = base_Url + "/user/login";
    axios
      .post(url, body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        navigate("/agro/user/wallet");
      })
      .catch((err) => {
        console.log(err);
        alert("Email ou senha incorreta, por favor tente novamente.");
      });
  };
  return (
    <>
      <Header />

      <ContainerLogin>
        <form onSubmit={onLogin}>
          <p>Email</p>
          <ContainerInput
            type="text"
            name={"email"}
            placeholder="Email"
            onChange={onChangeForm}
            value={form.email}
            required
          />
          <p>Senha</p>
          <ContainerInput
            type="password"
            name={"password"}
            placeholder="Senha"
            onChange={onChangeForm}
            value={form.password}
            required
          />
          <ContainerInputTerms>
            <input type="checkbox" value="" required/>
            <span>
              Aceito o compartilhamento de dados de acordo com o
             <Link to="/terms"> termo</Link> de uso da plataforma, Lei geral de
              proteção de dados e direito do consumidor.
            </span>
          </ContainerInputTerms>
          <ContainerButton>
            <button type={"submit"} onClick={loginUser}>
              Login
            </button>
            <Link to="/signup">
              <button>Cadrastrar</button>
            </Link>
          </ContainerButton>
        </form>
        <ContainerHr></ContainerHr>
        <ContainerLoginOnline>
          <img src={face} />
          <img src={google} />
          <img src={apple} />
        </ContainerLoginOnline>
      </ContainerLogin>
    </>
  );
}
