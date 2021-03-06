import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { base_Url } from "../../Constants/base_Url";
import {
  ContainerButton,
  ContainerCreateWallet,
  ContainerInput,
} from "./styled";
export default function AgroWalletPage() {
  const navigate = useNavigate();

  //form
  const { form, onChangeForm, clearForm } = useForm({
    lote: "",
    fotoLote: "",
    areaPlantio: "",
    dataPlantacao: "",
    tempoColheita: "",
  });
  const onCreateAgroWallet = (e) => {
    e.preventDefault();
  };

  //endpoint create agro wallet
  const createAgroWallet = () => {
    const body = form;
    const headers = {
      headers: { authorization: localStorage.getItem("token") },
    };
    axios
      .post(base_Url + "/user/wallet", body, headers)
      .then((res) => {
        clearForm();
        alert("Dados salvos com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        alert(
          `Um ou mais campos enviados estão incorretos, por favor verifique os dados preenchidos.`
        );
      });
  };
  return (
    <>
      <Header />
      <ContainerCreateWallet>
        <h1>Salve seus dados na carteira digital</h1>
        <form onSubmit={onCreateAgroWallet}>
          <p>Lote das sementes</p>
          <ContainerInput
            type="text"
            name={"lote"}
            placeholder="Lote"
            onChange={onChangeForm}
            value={form.lote}
            required
          />
          <p>Url da foto do lote</p>
          <ContainerInput
            type="text"
            name={"fotoLote"}
            placeholder="Foto do lote"
            onChange={onChangeForm}
            value={form.fotoLote}
            required
          />

          <p>
            Área do plantio em metros quadrados (m
            <sup style={{ fontSize: "12px" }}>2</sup>)
          </p>
          <ContainerInput
            type="number"
            name={"areaPlantio"}
            placeholder="Área do plantio em m2 (somente números)"
            onChange={onChangeForm}
            value={form.areaPlantio}
            required
          />
          <p>Data da plantação (DD/MM/AAAA)</p>
          <ContainerInput
            type="text"
            name={"dataPlantacao"}
            placeholder="Data da plantação formato (DD/MM/AAAA) "
            onChange={onChangeForm}
            value={form.dataPlantacao}
            required
          />
          <p>Tempo para a colheita em dias</p>
          <ContainerInput
            type="number"
            name={"tempoColheita"}
            placeholder="Tempo para colheita"
            onChange={onChangeForm}
            value={form.tempoColheita}
            required
          />
          <ContainerButton>
            <button type={"submit"} onClick={createAgroWallet}>
              Enviar
            </button>
            <Link to="/">
              <button>Voltar</button>
            </Link>
          </ContainerButton>
        </form>
      </ContainerCreateWallet>
    </>
  );
}
