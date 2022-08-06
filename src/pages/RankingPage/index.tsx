import { useEffect, useState } from "react";

// Types
import { RankingData } from "../../@types";
import RankingList from "../../components/RankingList";
// API
import { api } from "../../services/api";
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

  async function getRankingData() {
    try {
      const promise = await api.get("/ranking");
      setRankingData(promise.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRankingData();
  }, []);

  function renderMessage(isUserAuthenticated: boolean) {
    if (isUserAuthenticated) {
      return <Message>Crie sua conta para usar nosso serviço!</Message>;
    }
    return null;
  }

  function renderRankingList(rankingData: RankingData | undefined) {
    if (rankingData) {
      return <RankingList data={rankingData} />;
    }

    console.log("ainda não carregou");
    return "Loading...";
  }

  const message = renderMessage(isUserAuthenticated);
  const rankingList = renderRankingList(rankingData);

  return (
    <main>
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
