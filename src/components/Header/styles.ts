import styled from "styled-components";

import Logo from "../ShortlyLogo";

export const Container = styled.header`
  width: 100%;
  height: 150px;
  margin-top: 60px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginSignUpLinks = styled.div`
  align-self: flex-end;
  display: flex;

  a {
    text-decoration: none;
    line-height: 1.5rem;

    &:hover {
      text-underline-offset: 2px;
      text-decoration: underline;
    }
  }

  a:first-child {
    margin-right: 2rem;
    color: var(--brand);
  }

  a:nth-child(2) {
    color: var(--text-secondary);
  }
`;

export const ShortlyLogo = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  h1 {
    font-size: 64px;
    font-weight: 100;
    margin-right: 1rem;
  }
`;

export const ShortsIcon = styled(Logo)`
  flex-shrink: 0;
`;
