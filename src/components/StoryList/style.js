import styled from "@emotion/styled";
import { mobile, tablet } from "../../styles";
import { colors } from "../../styles";

const { background } = colors;

export const Layout = styled("div")`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  ${tablet} {
    width: 96%;
  }
`;

export const ListWrapper = styled("ul")`
  background-color: ${background};
  border-radius: 0 0 5px 5px;
  margin: 0;
  list-style: none;
  padding: 0;
`;
