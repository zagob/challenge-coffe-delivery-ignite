import styled from "styled-components";

export const CheckoutContainerForm = styled.form`
  display: flex;
  gap: 1.125rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const HeaderTitleBase = styled.div`
  display: flex;
  gap: 8px;
  padding: 2.5rem;

  font-family: "Roboto";

  span {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const HeaderTitle = styled(HeaderTitleBase)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 42px;
    background-color: ${(props) => props.theme["base-button"]};
    border: 1px solid ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    border-radius: 4px;
    padding: 12px;

    font-family: "Roboto";
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:active {
      border: 1px solid ${(props) => props.theme["yellow"]};
    }
  }
`;

export const ContentCep = styled.div`
  input {
    width: 200px;
  }
`;

export const ContentStreet = styled.div`
  input {
    width: 100%;
  }
`;

export const ContentNumber = styled.div`
  display: flex;
  gap: 1rem;
  input:last-child {
    flex: 1;
  }
`;

export const ContentCity = styled.div`
  display: flex;
  gap: 1rem;

  input {
    &:nth-child(2) {
      flex: 1;
    }

    &:nth-child(3) {
      width: 60px;
    }
  }
`;

export const ContentPayament = styled.div`
  margin-top: 2rem;
`;

export const HeaderTitlePayament = styled(HeaderTitleBase)`
  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ContentButtonsPayament = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SectionCompleteRequest = styled.section`
  flex: 1;
`;

export const ContentCartItens = styled.div`
  padding: 2.5rem;
  height: 400px;
  overflow-y: scroll;
  margin-bottom: 2rem;
`;

export const SectionCart = styled.section`
  width: 448px;
`;

export const ContentCheckoutValue = styled.div`
  max-width: 368px;
  margin: 0 auto;
`;

export const baseText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme["base-text"]};
  font-family: "Roboto";
  font-size: 0.875rem;
  & + div {
    margin-top: 0.5rem;
  }
`;

export const TotalValueItensText = styled(baseText)``;
export const DeliveryText = styled(baseText)``;
export const TotalValueText = styled(baseText)`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ButtonConfirmRequest = styled.button`
  width: 100%;
  height: 46px;
  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  text-transform: uppercase;
  font-family: "Roboto";
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  margin-top: 1.2rem;

  transition: 0.2s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
