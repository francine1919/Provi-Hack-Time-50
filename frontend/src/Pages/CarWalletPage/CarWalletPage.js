import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
export default function CarWalletPage() {
  const navigate = useNavigate();

  //form
  const { form, onChangeForm, clearForm } = useForm({
    // placaDoCarro: "",
    // marcaEModelo: "",
    // kmsRodados: "",
    // fotoKmRodados: "",
  });
  const onSingUp = (e) => {
    e.preventDefault();
    clearForm();
  };

  //endpoint create car wallet
  const createCarWallet = () => {
    const body = form;
    const headers = {
      headers: { authorization: localStorage.getItem("token") },
    };
    axios
      .post("", body, headers)
      .then((res) => {
        alert("Dados salvos com sucesso!");
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        alert(`${err.response.data}`);
      });
  };
  return (
    <div>
      <Header />
      <h1>Salve seus dados na carteira</h1>
      <form onSubmit={onSingUp}>
        <p>Placa do veículo</p>
        <input
          type="text"
          // name={""}
          placeholder="Placa do veículo"
          onChange={onChangeForm}
          // value={form.lote}
          required
        />
        <p>Marca e modelo</p>
        <input
          type="text"
          // name={""}
          placeholder="Marca e modelo"
          onChange={onChangeForm}
          // value={form.fotoLote}
          required
        />

        <p>Quantidade de kilômetros rodados</p>
        <input
          type="number"
          // name={""}
          placeholder="Quantidade de kilômetros rodados"
          onChange={onChangeForm}
          // value={form.areaPlantio}
          required
        />
        <p>Foto dos kilômetros rodados (ver hodômetro)</p>
        <input
          type="text"
          // name={""}
          placeholder="Foto dos kilômetros rodados (ver hodômetro)"
          onChange={onChangeForm}
          // value={form.dataPlantacao}
          required
        />
        <div>
          <button type={"submit"} onClick={createCarWallet}>
            Enviar
          </button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
