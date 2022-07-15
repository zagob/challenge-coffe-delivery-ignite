import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: calc(100vh - 22rem);

  gap: 8rem;
`;

export const SectionLeft = styled.div`
  flex: 1;
`;

export const SectionInfo = styled.div`
  h2 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2";
    font-size: 2rem;
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto";
    font-size: 1.25rem;
  }
`;

export const ContentAddress = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;
  margin-top: 3rem;
  padding: 3rem;
`;

export const InfoBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  & + div {
    margin-top: 2rem;
  }

  div:first-child {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 16px;
      color: #fff;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;

    font-family: "Roboto";
    color: ${(props) => props.theme["base-text"]};
    span {
      font-size: 1rem;
      strong {
        font-family: "Roboto";
      }
    }
  }
`;

export const InfoAddress = styled(InfoBase)`
  div:first-child {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const InfoDelivery = styled(InfoBase)`
  div:first-child {
    background: ${(props) => props.theme["yellow"]};
  }
`;

export const InfoPayament = styled(InfoBase)`
  div:first-child {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
