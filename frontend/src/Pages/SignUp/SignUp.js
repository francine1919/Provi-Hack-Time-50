import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import { ContainerButton, ContainerSignup } from "./styled";
import { ContainerInput, ContainerInputTerms } from "../Login/styled";

export default function SignUp() {
  const navigate = useNavigate();
  //form
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const onSignUp = (e) => {
    e.preventDefault();
  };
  //endpoint signup
  const signUp = () => {
    const body = form;
    axios
      .post(base_Url + "/user/signup", body)
      .then((res) => {
        clearForm();
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(`${err.response.data}`);
      });
  };
  return (
    <>
      <Header />
      <ContainerSignup>
        <form onSubmit={onSignUp}>
          <p>Nome</p>
          <ContainerInput
            type="text"
            name={"name"}
            placeholder="Nome"
            onChange={onChangeForm}
            value={form.name}
            required
          />
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
            <input type="checkbox" value="" required />
            <span>
              Aceito o compartilhamento de dados de acordo com o
              <Link to="/terms"> termo</Link> de uso da plataforma, Lei geral de
              proteção de dados e direito do consumidor.
            </span>
          </ContainerInputTerms>
          <ContainerButton>
            <button type={"submit"} onClick={signUp}>
              Cadrastrar
            </button>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </ContainerButton>
        </form>
      </ContainerSignup>
    </>
  );
}
