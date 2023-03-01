import { useState } from "react";

import { LayoutComponents } from "../../components/Layout";
import NavBar from "../../components/NavBar";
import CSS from "../../assets/global.css";

 const JobRegister = () => {
    const [tipo, setTipo] = useState("");
    const [ofertante, setOfertante] = useState("");
    const [local, setLocal] = useState("");
    const [horario, setHorario] = useState("");
    const [contato, setContato] = useState("");
    const [descricao, setDescricao] = useState("");


    
    return (
        <div>
            <NavBar></NavBar>
            <LayoutComponents>
                <form className="jobRegister-form">
                    
                    <span className="jobRegister-form-title">
                        <h1>Título da vaga</h1>
                    </span>
                    <span className="jobRegister-form-title2">
                        <h3>Insira os dados da vaga </h3>
                    </span>
                
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
                        <span className="focus-input" data-placeholder="Ofertante"></span>
                    </div>

                    <div className="dados-vaga-input">
                        <input
                            className={local !== "" ? "has-val input" : "input"}
                            type="local"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Ofertante"></span>
                    </div>

                    <div className="dados-vaga-input">
                        <input
                            className={horario !== "" ? "has-val input" : "input"}
                            type="horario"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Horario"></span>
                    </div>

                    <div className="dados-vaga-input">
                        <input
                            className={contato !== "" ? "has-val input" : "input"}
                            type="contato"
                            value={contato}
                            onChange={(e) => setContato(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Contato"></span>
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
                        <button className="jobRegister-form-btn-cadastrar">Cadastrar vaga</button>
                        <button className="jobRegister-form-btn-excluir">Excluir vaga</button>
                    </div>
                </form>
            </LayoutComponents>
        </div>
    );
};

export default JobRegister;
