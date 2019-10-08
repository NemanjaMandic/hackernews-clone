import styled from "@emotion/styled";
import { colors } from "../../styles";

const { black, white, main } = colors;

export const Head = styled("header")`
  background-color: ${main};
  display: flex;
`;

export const Title = styled("h3")`
  color: ${black};
`;

export const LogoWrapper = styled("div")`
  border: 1px solid ${white};
  height: 18px;
  margin: 0 7px;
  transform: translateY(23px);
`;
