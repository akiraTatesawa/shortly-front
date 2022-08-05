import { useState } from "react";

import {
  Container,
  RankingTitle,
  TrophyIcon,
  RankingContainer,
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
    <main>
      <Container>
        <RankingTitle>
          <TrophyIcon />
          <h2>Ranking</h2>
        </RankingTitle>

        <RankingContainer>
          <ul>
            <li>1. Fulaninha - 32 links - 100 visualizações</li>
            <li>1. Fulaninha - 32 links - 100 visualizações</li>
            <li>1. Fulaninha - 32 links - 100 visualizações</li>
          </ul>
        </RankingContainer>

        {message}
      </Container>
    </main>
  );
}
