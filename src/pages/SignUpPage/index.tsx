import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      setSignUpData({ ...signUpData, password: "", confirmPassword: "" });
      console.log(error);
    }

    setIsSendingSignUpData(false);
  }

  return (
    <main>
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
