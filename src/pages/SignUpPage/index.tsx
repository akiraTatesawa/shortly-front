import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Types
import { SignUpType } from "../../@types";
// Components
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
// API
import { postSignUpData } from "../../services/api";
// Styles
import { Container } from "./styles";

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState<SignUpType | undefined>();
  const [isSendingSignUpData, setIsSendingSignUpData] = useState(false);
  const navigate = useNavigate();

  function displayErrorNotify(status: number | undefined) {
    const errorMessage = status
      ? "Preencha os campos corretamente!"
      : "Erro interno. Tente novamente mais tarde";

    toast.error(errorMessage, {
      toastId: 2,
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
    setSignUpData({ ...signUpData, [name]: value });
  }

  async function sendSignUpInfo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSendingSignUpData(true);

    try {
      await postSignUpData(signUpData);
      navigate("/sign-in");
    } catch (error) {
      const err = error as AxiosError;
      setSignUpData({ ...signUpData, password: "", confirmPassword: "" });
      displayErrorNotify(err.response?.status);
      console.log(err);
    }

    setIsSendingSignUpData(false);
  }

  return (
    <main>
      <ToastContainer />
      <Container onSubmit={(event) => sendSignUpInfo(event)}>
        <Input
          name="name"
          type="text"
          placeholder="nome"
          value={signUpData?.name || ""}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingSignUpData}
          required
          maxLength={30}
        />
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={signUpData?.email || ""}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingSignUpData}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="senha"
          value={signUpData?.password || ""}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingSignUpData}
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="confirmar senha"
          value={signUpData?.confirmPassword || ""}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingSignUpData}
          required
        />
        <SubmitButton
          title="Criar Conta"
          isCentered
          isDisabled={isSendingSignUpData}
        />
      </Container>
    </main>
  );
}
