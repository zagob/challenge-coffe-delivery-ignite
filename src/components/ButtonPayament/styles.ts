import styled from "styled-components";

interface ButtonContainerProps {
  active: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 177px;
  svg {
    color: ${(props) => props.theme["purple"]};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
  border: ${(props) =>
    props.active
      ? `1px solid ${props.theme["purple"]}`
      : "1px solid transparent"};
  background: ${(props) =>
    props.active
      ? `${props.theme["purple-ligh"]}`
      : `${props.theme["base-button"]}`};
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Roboto";
  padding: 1rem;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["purple"]};
    background: ${(props) => props.theme["purple-light"]};
  }
`;
