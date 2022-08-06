import styled from "styled-components";

export const LoginSignUpLinks = styled.nav`
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
