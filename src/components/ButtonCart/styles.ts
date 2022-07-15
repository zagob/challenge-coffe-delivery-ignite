import styled from "styled-components";

export const ButtonCartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: ${(props) => props.theme["base-card"]};
  background: ${(props) => props.theme["purple-dark"]};
  border: none;
  border-radius: 6px;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;
