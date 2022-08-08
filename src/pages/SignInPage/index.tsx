import { AxiosError } from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Types
import { LoginType } from "../../@types";
// Components
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
// Contexts
import { UserContext } from "../../contexts/UserContext";
// API
import { postLoginData } from "../../services/api";
// Styles
import { Container } from "./styles";

export default function SignInPage() {
  const [loginData, setLoginData] = useState<LoginType | undefined>();
  const [isSendingLoginData, setIsSendingLoginData] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  function errorNotify(status: number | undefined) {
    const errorMessage = status
      ? "Email ou senha incorretos"
      : "Erro interno. Tente novamente mais tarde";

    toast.error(errorMessage, {
      toastId: 1,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function sendLoginInfo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSendingLoginData(true);

    try {
      const promise = await postLoginData(loginData);
      const { data } = promise;
      const user = userContext?.userData;

      userContext?.setData({ ...user, token: data.token });
      localStorage.setItem(
        "userData",
        JSON.stringify({ name: undefined, token: data.token })
      );

      navigate("/");
    } catch (error) {
      const err = error as AxiosError;
      setLoginData({ ...loginData, password: "" });
      errorNotify(err.response?.status);
      console.log(error);
    }

    setIsSendingLoginData(false);
  }

  return (
    <main>
      <ToastContainer />
      <Container onSubmit={(event) => sendLoginInfo(event)}>
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={loginData?.email || ""}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingLoginData}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="senha"
          value={loginData?.password || ""}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingLoginData}
          required
        />
        <SubmitButton
          title="Entrar"
          isCentered
          isDisabled={isSendingLoginData}
        />
      </Container>
    </main>
  );
}
