import { useEffect, useState } from "react";

// Types
import { APIRanking } from "../../@types";
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

interface RankingData {
  map(arg0: (e: APIRanking, index: number) => void): import("react").ReactNode;
  data?: APIRanking[];
}

interface RankingItemProps extends APIRanking {
  rankingPosition: number;
}

function RankingItem({
  rankingPosition,
  name,
  linksCount,
  visitCount,
}: RankingItemProps) {
  return (
    <li>{`${rankingPosition}. ${name} - ${linksCount} links - ${visitCount} visualizações`}</li>
  );
}

export default function RankingPage() {
  const [rankingData, setRankingData] = useState<RankingData>();
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
      return rankingData.map((item, index) => (
        <RankingItem
          key={item.id}
          rankingPosition={index + 1}
          name={item.name}
          linksCount={item.linksCount}
          visitCount={item.visitCount}
        />
      ));
    }
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

        <RankingContainer>
          <ul>{rankingList}</ul>
        </RankingContainer>

        {message}
      </Container>
    </main>
  );
}
