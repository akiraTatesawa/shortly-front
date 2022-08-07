import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

type PropTypeIsDeleting = {
  isDeleting: boolean;
};

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  * {
    color: var(--surface-primary);
  }

  li {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;

    background-color: var(--brand-light);
    border: 1px solid var(--border);
    border-radius: 12px;

    padding-left: 21px;

    overflow: hidden;

    div {
      display: flex;
      align-items: center;

      * {
        text-decoration: none;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      a:hover {
        text-decoration: underline;
      }

      .visit-count {
        width: 230px;
        margin-right: 20px;
      }

      button {
        width: 130px;
        height: 100%;
        background-color: var(--surface-primary);

        &:disabled {
          background-color: var(--surface-secondary);
        }
      }
    }

    .url {
      width: 200px;
    }

    .short-url {
      font-weight: 500;
    }
  }
`;

export const DeleteIcon = styled(FaTrashAlt).attrs(
  ({ isDeleting }: PropTypeIsDeleting) => ({ $isDeleting: isDeleting })
)`
  flex-shrink: 0;
  fill: var(--delete);
  width: 1.6rem;
  height: 1.6rem;

  opacity: ${(props) => (props.$isDeleting ? "0.25" : "1")};
`;
