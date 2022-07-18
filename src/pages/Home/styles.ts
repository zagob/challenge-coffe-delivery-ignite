import styled from "styled-components";

import bgYellow from "../../assets/bg-yellow.png";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url(${bgYellow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 950px) {
    position: relative;
    justify-content: center;
    img {
      position: absolute;
      opacity: 0.2;
    }
  }
`;

export const Content = styled.div`
  max-width: 588px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 800;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
  }
`;

export const ContentText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;

  @media (max-width: 1090px) {
    grid-template-columns: 1fr;
  }

  span {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    gap: 0.5rem;
    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme["white"]};
    }

    span {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    &:nth-child(1) {
      span {
        background: ${(props) => props.theme["yellow-dark"]};
      }
    }

    &:nth-child(2) {
      span {
        background: ${(props) => props.theme["base-text"]};
      }
    }

    &:nth-child(3) {
      span {
        background: ${(props) => props.theme["yellow"]};
      }
    }
    &:nth-child(4) {
      span {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }
`;

export const TitleProduct = styled.h2`
  font-family: "Baloo 2";
  margin-top: 3rem;
`;

export const ContentProducts = styled.main`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
