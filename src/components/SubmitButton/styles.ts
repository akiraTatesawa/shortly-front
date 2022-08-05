import styled from "styled-components";

type PropTypeCentered = {
  isCentered: boolean;
};

export const Button = styled.button.attrs((props: PropTypeCentered) => ({
  isCentered: props.isCentered,
}))<PropTypeCentered>`
  width: 182px;
  height: 60px;
  align-self: ${(props) => (props.isCentered ? "center" : "unset")};

  background-color: var(--brand);
  color: var(--text-on-brand);
  font-weight: 600;
  font-size: 16px;

  &:focus {
    outline: 1px solid var(--brand-light);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
  }

  border-radius: 12px;
`;
