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
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RightSide = styled.div`
  span {
    color: var(--brand);
    line-height: 1.5em;
    font-weight: 500;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    line-height: 1.5rem;
    color: var(--text-secondary);

    &:hover {
      text-underline-offset: 2px;
      text-decoration: underline;
    }
  }

  a.logout {
    color: var(--delete);
    font-weight: 500;
  }

  a.login {
    color: var(--brand);
    font-weight: 500;
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
