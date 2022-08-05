import React, { useState } from "react";

import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";
import { Container } from "./styles";

type LoginType = {
  email?: string;
  password?: string;
};

export default function SignInPage() {
  const [loginData, setLoginData] = useState<LoginType | null>();
  const [isSendingLoginData, setIsSendingLoginData] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setLoginData({ ...loginData, [name]: value });
  }

  function sendLoginInfo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(loginData);

    setIsSendingLoginData(true);

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log("Resolved"));
      }, 3000);
    });

    promise.then(() => setIsSendingLoginData(false));
  }

  return (
    <main>
      <Container onSubmit={(event) => sendLoginInfo(event)}>
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={loginData?.email}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingLoginData}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="senha"
          value={loginData?.password}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingLoginData}
          required
        />
        <SubmitButton title="Entrar" isCentered />
      </Container>
    </main>
  );
}
