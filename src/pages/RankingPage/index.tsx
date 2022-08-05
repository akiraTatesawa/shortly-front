import { useState } from "react";

import {
  Container,
  RankingTitle,
  TrophyIcon,
  RankingContainer,
  Main,
  Message,
} from "./styles";

export default function RankingPage() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  function renderMessage(isUserAuthenticated: boolean) {
    if (isUserAuthenticated) {
      return <Message>Crie sua conta para usar nosso serviço!</Message>;
    }

    return null;
  }

  const message = renderMessage(isUserAuthenticated);

  return (
    <Main>
      <Container>
        <RankingTitle>
          <TrophyIcon />
          <h2>Ranking</h2>
        </RankingTitle>

        <RankingContainer>
          <span>1. Fulaninha - 32 links - 100 visualizações</span>
          <span>1. Fulaninha - 32 links - 100 visualizações</span>
          <span>1. Fulaninha - 32 links - 100 visualizações</span>
        </RankingContainer>

        {message}
      </Container>
    </Main>
  );
}