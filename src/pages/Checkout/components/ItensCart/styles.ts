import styled from "styled-components";

export const ContentItem = styled.div`
  display: flex;
  position: relative;
  & + div {
    margin-top: 3rem;
  }
  gap: 1rem;

  &::after {
    content: '';
    background: ${(props) => props.theme["base-button"]};
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -40%;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-family: "Roboto";
  }
`;

export const QuantityOrRemoveItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 4px 10px;

  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const CurrentCart = styled.strong`
  color: ${(props) => props.theme["base-text"]};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;
