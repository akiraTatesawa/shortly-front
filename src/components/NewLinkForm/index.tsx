import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Contexts
import { UserContext } from "../../contexts/UserContext";
// API
import { postNewUrl } from "../../services/api";
// Utils
import { buildRequestConfig, deleteUserFromLocalStorage } from "../../utils";
// Components
import Input from "../Input";
import SubmitButton from "../SubmitButton";
// Styles
import { Form } from "./styles";

interface NewLinkFromProps {
  reloadLinks: () => void;
}

export default function NewLinkForm({ reloadLinks }: NewLinkFromProps) {
  const userContextData = useContext(UserContext);
  const [url, setUrl] = useState("");
  const [isSendingUrl, setIsSendingUrl] = useState(false);
  const navigate = useNavigate();

  function displayErrorNotify(status: number | undefined) {
    let errorMessage = "Erro interno. Tente novamente mais tarde";

    if (status === 401 || status === 500)
      errorMessage = "Sua sessão expirou. Faça login novamente";

    if (status === 422) errorMessage = "Formato de URL inválido!";

    toast.error(errorMessage, {
      toastId: 5,
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
    const { value } = event.target;
    setUrl(value);
  }

  async function sendNewLink(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSendingUrl(true);

    const config = buildRequestConfig();
    const data = {
      url,
    };

    try {
      await postNewUrl(data, config);
    } catch (error) {
      const err = error as AxiosError;
      displayErrorNotify(err.response?.status);

      if (err.response?.status === 401 || err.response?.status === 500) {
        deleteUserFromLocalStorage();
        userContextData?.setData({ name: undefined, token: undefined });

        setTimeout(() => navigate("/ranking"), 2000);
      }

      console.log(error);
    }

    setUrl("");
    reloadLinks();
    setIsSendingUrl(false);
  }

  return (
    <>
      <ToastContainer />
      <Form onSubmit={(event) => sendNewLink(event)}>
        <Input
          name="url"
          type="url"
          placeholder="Links que cabem no bolso"
          value={url}
          setValue={(event) => handleChange(event)}
          isDisabled={isSendingUrl}
        />
        <SubmitButton
          title="Encurtar Link"
          isCentered={false}
          isDisabled={isSendingUrl}
        />
      </Form>
    </>
  );
}
