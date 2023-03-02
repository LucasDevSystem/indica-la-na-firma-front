import { Link } from "react-router-dom";
import { useState } from "react";

import IMG from "../../assets/Logo.jpg";
import { LayoutComponents } from "../../components/Layout";
import css from "../../assets/global.css";
import axios from "axios";
import { Alert, AlertTitle } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ visible: false, type: "" });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.18.179:1388/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/jobs";
      }
    } catch ({ response }) {

      if (response.status === 404) {
        setAlert({ visible: true, type: "userNotFound" });
      }
      if (response.status === 401) {
        setAlert({ visible: true, type: "invalidPassword" });
      }
    }
  };

  return (
    <LayoutComponents>
      {alert.visible && alert.type === "userNotFound" && (
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          usuario inexistente
        </Alert>
      )}
      {alert.visible && alert.type === "invalidPassword" && (
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          Senha invalida
        </Alert>
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin();
        }}
        className="login-form"
      >
        <span className="login-form-title">
          <img src={IMG} alt="Logo" />
        </span>
        <span className="login-form-title"> Faça login na sua conta </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Cadastre-se.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Login;
