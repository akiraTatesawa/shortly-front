import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Types
import { APIUserData } from "../../@types";
// Components
import NewLinkForm from "../../components/NewLinkForm";
import UserLinks from "../../components/UserLinks";
// Context
import { UserContext } from "../../contexts/UserContext";
// API
import { getUserDataLinks } from "../../services/api";
/// Utils
import {
  buildRequestConfig,
  deleteUserFromLocalStorage,
  getUserDataFromLocalStorage,
} from "../../utils";
// Styles
import { Container, NewLinkSection, UserLinksSection } from "./styles";

export default function HomePage() {
  const userContextData = useContext(UserContext);
  const [userAPIData, setUserAPIData] = useState<APIUserData>();

  function displayErrorNotify(status: number | undefined) {
    const errorMessage = status
      ? "Sua sessão expirou! Faça login novamente"
      : "Erro interno. Tente novamente mais tarde";
    toast.error(errorMessage, {
      toastId: 4,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function getUserData() {
    const config = buildRequestConfig();
    try {
      const promise = await getUserDataLinks(config);
      setUserAPIData(promise.data);

      const localStorageUser = getUserDataFromLocalStorage();
      const updatedUser = {
        token: localStorageUser.token,
        name: promise.data.name,
      };

      localStorage.setItem("userData", JSON.stringify(updatedUser));
      userContextData?.setData(updatedUser);
    } catch (error) {
      const err = error as AxiosError;

      displayErrorNotify(err.response?.status);

      deleteUserFromLocalStorage();
      userContextData?.setData({ name: undefined, token: undefined });

      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <main>
      <ToastContainer />
      <Container>
        <NewLinkSection>
          <NewLinkForm reloadLinks={() => getUserData()} />
        </NewLinkSection>
        <UserLinksSection>
          <UserLinks
            userLinksData={userAPIData?.shortenedUrls || []}
            reloadLinks={() => getUserData()}
          />
        </UserLinksSection>
      </Container>
    </main>
  );
}
