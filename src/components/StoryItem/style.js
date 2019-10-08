import styled from "@emotion/styled";
import { mobile, tablet } from "../../styles";
import { colors, transitions } from "../../styles";

const { main, subText, black, newsTitle } = colors;
const { defaultTransition } = transitions;

export const Item = styled("li")`
border-bottom: 1px solid ${main};
padding: 14px 24px;
&:last-child {
  border-bottom: none;

`;

export const Host = styled("span")`
  font-size: 8pt;
  color: ${subText};
  transition: ${defaultTransition};
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
    color: ${main};
  }
`;

export const TitleLink = styled("a")`
  color: ${newsTitle};
  font-size: 11pt;
  line-height: 14pt;
  width: 100%;
  height: 100%;
  text-decoration: none;
  ${mobile} {
    font-size: 10pt;
  }
`;

export const Description = styled("div")`
  font-size: 7pt;
  color: ${subText};
`;

export const Link = styled("a")`
  margin: 0 5px;
  transition: ${defaultTransition};
  color: ${black};
  &:hover {
    color: ${main};
  }
`;
