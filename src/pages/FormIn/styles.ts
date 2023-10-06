import styled from "styled-components/native";
import { colors, fonts } from "../../common";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.Inter_400Regular};
  color: ${colors.black};
  margin: 32px 0 24px;
`;

export const Version = styled.Text`
  position: absolute;
  bottom: 8px;
  font-size: 16px;
  color: ${colors.black};
  font-family: ${fonts.Inter_400Regular};
`;
