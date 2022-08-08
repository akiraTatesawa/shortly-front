import { AxiosError } from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Types
import { APIUserUrlData } from "../../@types";
// Contexts
import { UserContext } from "../../contexts/UserContext";
// API
import { deleteUrl } from "../../services/api";
// Utils
import { buildRequestConfig, deleteUserFromLocalStorage } from "../../utils";
// Styles
import { Container, DeleteIcon } from "./styles";

interface UserLinksProps {
  userLinksData: APIUserUrlData[];
  reloadLinks: () => void;
}

interface LinkContainerProps extends APIUserUrlData {
  reloadLinks: () => void;
}

function LinkContainer({
  id,
  shortUrl,
  url,
  visitCount,
  reloadLinks,
}: LinkContainerProps) {
  const [isDeletingUrl, setIsDeletingUrl] = useState(false);
  const userContextData = useContext(UserContext);
  const navigate = useNavigate();

  function displayErrorNotify(status: number | undefined) {
    let errorMessage = "Não foi possível excluir a URL";

    if (status === 401 || status === 500)
      errorMessage = "Sua sessão expirou. Faça login novamente";

    if (!status) errorMessage = "Erro interno. Tente novamente mais tarde";

    toast.error(errorMessage, {
      toastId: 6,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function handleDeleteUrl() {
    setIsDeletingUrl(true);
    try {
      const config = buildRequestConfig();
      await deleteUrl(id, config);
      reloadLinks();
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      displayErrorNotify(err.response?.status);

      if (err.response?.status === 401 || err.response?.status === 500) {
        deleteUserFromLocalStorage();
        userContextData?.setData({ name: undefined, token: undefined });

        setTimeout(() => navigate("/ranking"), 2000);
      }

      console.log(error);
    }
  }

  return (
    <li>
      <div className="url">
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
      <div className="short-url">
        <Link
          to={`/open/${shortUrl}`}
        >{`${process.env.REACT_APP_CLIENT_URL}/open/${shortUrl}`}</Link>
      </div>
      <div>
        <span className="visit-count">
          Quantidade de visitantes: {visitCount}
        </span>
        <button
          type="button"
          onClick={handleDeleteUrl}
          disabled={isDeletingUrl}
        >
          <DeleteIcon $isDeleting={isDeletingUrl} />
        </button>
      </div>
    </li>
  );
}

export default function UserLinks({
  userLinksData,
  reloadLinks,
}: UserLinksProps) {
  return (
    <Container>
      {userLinksData.map((linkData) => (
        <LinkContainer
          id={linkData.id}
          url={linkData.url}
          key={linkData.id}
          shortUrl={linkData.shortUrl}
          visitCount={linkData.visitCount}
          reloadLinks={reloadLinks}
        />
      ))}
    </Container>
  );
}
