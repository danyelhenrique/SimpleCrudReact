import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  padding: 0px 15px;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: var(--shadow);
  grid-area: header;

  & > h1 {
    font-size: 1.8em;
  }
`;
