import { FaTrophy } from "react-icons/fa";
import styled from "styled-components";

export const Main = styled.main`
  margin-top: 70px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankingTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 36px;
  }
`;

export const TrophyIcon = styled(FaTrophy)`
  fill: var(--trophy);
  width: 56px;
  height: 50px;

  flex-shrink: 0;
`;

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: auto;

  margin-top: 57px;
  padding: 30px 40px;

  border: 1px solid var(--border);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;

  span {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.25em;
    letter-spacing: 0.1px;
  }
`;

export const Message = styled.span`
  font-size: 32px;
  font-weight: 500;

  margin: 80px 0;
`;
