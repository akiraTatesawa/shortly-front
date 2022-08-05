import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  height: 60px;

  outline: none;

  color: var(--text-primary);
  font-size: 16px;

  &:focus {
    outline: 1px solid var(--brand-light);
  }

  &:disabled {
    background-color: var(--surface-secondary);
    color: var(--text-secondary);
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: var(--text-secondary);
    font-weight: 500;
  }

  padding: 21px;

  border: solid 1px var(--border);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
`;
