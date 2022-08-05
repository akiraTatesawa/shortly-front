import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  > input:nth-child(2) {
    margin-bottom: 40px;
  }
`;
