import styled from "styled-components";

export const ContentButtonsQuantity = styled.div`
  background: ${(props) => props.theme["base-button"]};
  padding: 4px 10px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  span {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

interface BaseButtonControlProps {
  teste?: boolean;
}

export const BaseButtonControl = styled.button<BaseButtonControlProps>`
  border: none;
  display: flex;
  color: ${(props) => props.theme["purple"]};
  background: transparent;

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["purple-dark"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
