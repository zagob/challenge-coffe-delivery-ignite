import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 177px;
  svg {
    color: ${(props) => props.theme["purple"]};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  border: 1px solid transparent;
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
