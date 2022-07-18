import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export const ButtonLocation = styled.button`
  background: ${(props) => props.theme["purple-light"]};
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ButtonCart = styled.button`
  position: relative;
  background-color: ${(props) => props.theme["yellow-light"]};
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  transition: svg 0.2s;

  &:hover {
    svg {
      color: ${(props) => props.theme["yellow"]};
    }
  }
`;

export const PointerItens = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-weight: bold;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
`;
