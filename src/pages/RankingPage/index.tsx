import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Types
import { RankingData } from "../../@types";
import RankingList from "../../components/RankingList";
// API
import { getRanking } from "../../services/api";
import { getUserDataFromLocalStorage } from "../../utils";
// Styles
import {
  Container,
  RankingTitle,
  TrophyIcon,
  RankingContainer,
  Message,
} from "./styles";

export default function RankingPage() {
  const [rankingData, setRankingData] = useState<RankingData | undefined>();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  function displayErrorNotify(status: number | undefined) {
    const errorMessage = status
      ? "Não foi possível obter o ranking"
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

  async function getRankingData() {
    try {
      const promise = await getRanking();
      setRankingData(promise.data);
    } catch (error) {
      const err = error as AxiosError;
      displayErrorNotify(err.response?.status);
      console.log(error);
    }
  }

  useEffect(() => {
    getRankingData();
    const userData = getUserDataFromLocalStorage();
    setIsUserAuthenticated(Boolean(userData));
  }, []);

  function renderMessage(isUserAuthenticated: boolean) {
    if (!isUserAuthenticated) {
      return <Message>Crie sua conta para usar nosso serviço!</Message>;
    }
    return null;
  }

  function renderRankingList(rankingData: RankingData | undefined) {
    if (rankingData) {
      return <RankingList data={rankingData} />;
    }

    return "Loading...";
  }

  const message = renderMessage(isUserAuthenticated);
  const rankingList = renderRankingList(rankingData);

  return (
    <main>
      <ToastContainer />
      <Container>
        <RankingTitle>
          <TrophyIcon />
          <h2>Ranking</h2>
        </RankingTitle>

        <RankingContainer>{rankingList}</RankingContainer>

        {message}
      </Container>
    </main>
  );
}
