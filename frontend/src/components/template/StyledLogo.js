import styled from "styled-components";

export const Aside = styled.aside`
  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: logo;

  & > a {
    width: 560px;
    height: 100px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 576px) {
    & > img {
      width: 350px;
    }
  }
`;
