import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";
import CSS from "../../assets/global.css";
import { LayoutComponents } from "../../components/Layout";
import UsrImg from "../../assets/user_img.jpeg";

const Profile = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [RA, setRA] = useState("");
  const [area_atuacao, setArea_atuacao] = useState("");
  const [contato, setContato] = useState("");
  const [curriculo, setCurriculo] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [isEditable, setIsEditable] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user"));

  function abrirEdicao() {
    const userDataInputs = document.getElementsByClassName("userData-input");

    for (let i = 0; i < userDataInputs.length; i++) {
      userDataInputs[i].setIsEditable = true;
    }
  }

  function alterarFoto() {
    const inputString = prompt("Digite a url da nova foto de perfil: ");

    if (inputString) {
      setImageUrl(inputString);
    }
  }

  function pegaCurriculo() {
    const inputString = prompt("Digite a url do seu currículo: ");
    const curriculo = document.getElementById("curriculo");

    if (inputString) {
      curriculo.value = inputString;
    }
  }
  const setInitialData = () => {
    setNome(userData.name);
    setEmail(userData.email);
  };
  // seta os dados iniciais
  useEffect(() => {
    setInitialData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <LayoutComponents>
        <form onSubmit={(e) => e.preventDefault()} className="userData-form">
          <span className="userData-form-title">
            <h1>Perfil de usuário</h1>
          </span>

          <div className="userData-options">
            <div className="userPhoto">
              <img src={imageUrl ? imageUrl : UsrImg} id="fotoPerfil"></img>
            </div>

            <div className="container-UserData-form-btn">
              <button
                className="UserData-form-btn-alterarFoto"
                onClick={alterarFoto}
              >
                Alterar foto
              </button>
              <button
                className="UserData-form-btn-editarDados"
                onClick={abrirEdicao}
              >
                Editar dados
              </button>
              <button
                className="UserData-form-btn-cadastrarCurriculo"
                onClick={pegaCurriculo}
              >
                Linkedin
              </button>
            </div>
          </div>

          <div
            style={{ background: "#dddddd", borderColor: "#dddddd" }}
            className="userData-input"
          >
            <h4 className="labelUserData">Nome:</h4>
            <input
              disabled={!isEditable}
              className={nome !== "" ? "has-val input" : "input"}
              type="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <span className="focus-input" data-placeholder=""></span>
          </div>

          <div
            style={{ background: "#dddddd", borderColor: "#dddddd" }}
            className="userData-input"
          >
            <h4 className="labelUserData">Email:</h4>
            <input
              disabled={!isEditable}
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder=""></span>
          </div>
          <div
            style={{ background: "#dddddd", borderColor: "#dddddd" }}
            className="userData-input"
          >
            <h4 className="labelUserData">Currículo:</h4>
            <input
              disabled={!isEditable}
              className={contato !== "" ? "has-val input" : "input"}
              id="curriculo"
              type="curriculo"
              value={curriculo}
              onChange={(e) => setCurriculo(e.target.value)}
            />
            <span className="focus-input" data-placeholder=""></span>
          </div>

          <div className="userData-input">
            <h4 className="labelUserData">RA:</h4>
            <input
              className={RA !== "" ? "has-val input" : "input"}
              type="RA"
              value={RA}
              onChange={(e) => setRA(e.target.value)}
            />
            <span className="focus-input" data-placeholder=""></span>
          </div>

          <div className="userData-input">
            <h4 className="labelUserData">Área de atuação:</h4>
            <input
              className={area_atuacao !== "" ? "has-val input" : "input"}
              type="area_atuacao"
              value={area_atuacao}
              onChange={(e) => setArea_atuacao(e.target.value)}
            />
            <span className="focus-input" data-placeholder=""></span>
          </div>

          <div className="userData-input">
            <h4 className="labelUserData">Contato:</h4>
            <input
              className={contato !== "" ? "has-val input" : "input"}
              type="contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
            />
            <span className="focus-input" data-placeholder=""></span>
          </div>
        </form>
      </LayoutComponents>
    </div>
  );
};

export default Profile;
