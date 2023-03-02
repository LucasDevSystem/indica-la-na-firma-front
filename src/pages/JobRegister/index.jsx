import { useState } from "react";

import { LayoutComponents } from "../../components/Layout";
import NavBar from "../../components/NavBar";
import CSS from "../../assets/global.css";
import axios from "axios";

const JobRegister = () => {
  const [tipo, setTipo] = useState("");
  const [ofertante, setOfertante] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  
  
  const userData = JSON.parse(localStorage.getItem("user"));


  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://192.168.18.179:1388/job", {
        authorId: userData.id,
        title: titulo,
        description: descricao,
        offerer: ofertante,
        location: local,
      });
      window.location.href = "/Jobs";
    } catch (error) {}
  };

  return (
    <div>
      <NavBar></NavBar>
      <LayoutComponents>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
          className="jobRegister-form"
        >
          <span className="jobRegister-form-title">
            <h1>{titulo ? titulo : "Título da vaga"}</h1>
          </span>
          <span className="jobRegister-form-title2">
            <h3>Insira os dados da vaga </h3>
          </span>

          <div className="dados-vaga-input">
            <input
              className={titulo !== "" ? "has-val input" : "input"}
              type="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Titulo"></span>
          </div>

          <div className="dados-vaga-input">
            <input
              className={tipo !== "" ? "has-val input" : "input"}
              type="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Tipo"></span>
          </div>

          <div className="dados-vaga-input">
            <input
              className={ofertante !== "" ? "has-val input" : "input"}
              type="ofertante"
              value={ofertante}
              onChange={(e) => setOfertante(e.target.value)}
            />
            <span
              className="focus-input"
              data-placeholder="Empresa Ofertante"
            ></span>
          </div>

          <div className="dados-vaga-input">
            <input
              className={local !== "" ? "has-val input" : "input"}
              type="local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Local"></span>
          </div>
          <div className="dados-vaga-input">
            <input
              className={descricao !== "" ? "has-val input" : "input"}
              type="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Descricao"></span>
          </div>

          <div className="container-jobRegister-form-btn">
            <button className="jobRegister-form-btn-cadastrar">
              Cadastrar vaga
            </button>
          </div>
        </form>
      </LayoutComponents>
    </div>
  );
};

export default JobRegister;
