import styled from "styled-components";

export const ProductItemContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  font-family: "Baloo 2";

  gap: 0.8rem;

  img {
    width: 120px;
    height: 120px;
  }

  h3 {
    font-size: 1.125rem;
  }

  p {
    font-size: 0.875rem;
    font-family: "Roboto";
    line-height: 1rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    margin: 0 auto;
  }
  gap: 4px;

  span {
    background: ${(props) => props.theme["yellow-light"]};
    padding: 0 0.7rem;
    font-size: 1rem;
    color: ${(props) => props.theme["yellow-dark"]};

    text-transform: uppercase;
    border-radius: 12px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    font-size: 0.9rem;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.125rem;
`;

export const CurrentValue = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-size: 0.8rem;

  gap: 4px;

  strong {
    font-family: "Baloo 2";
    font-size: 1.3rem;
  }
`;

export const ContentOptions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
