import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { redirectToUrl } from "../../services/api";
import { Container } from "./styles";

export default function RedirectPage() {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const { shortUrl } = useParams();

  function displayErrorNotify(status: number | undefined) {
    const errorMessage = status
      ? "URL não encontrada"
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

  async function getUrl(shortUrl: string) {
    try {
      const promise = await redirectToUrl(shortUrl);
      setUrl(promise.data.replace("OK. Redirecting to ", ""));
    } catch (error) {
      const err = error as AxiosError;
      displayErrorNotify(err.response?.status);
      console.log(error);
    }
  }

  useEffect(() => {
    if (!url) {
      getUrl(shortUrl || "");
    } else {
      window.location.href = url;
    }
  }, [url]);

  return (
    <Container>
      <ToastContainer />
      <p>Você está sendo redirecionado para</p>
      <p className="url">{url || "..."}</p>
    </Container>
  );
}
