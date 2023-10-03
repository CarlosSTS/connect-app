import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { colors, fonts } from "../../common";

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: ${({ enabled }) =>
    enabled ? colors.primaryColor : colors.blackLight};
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.Inter_700Bold};
  color: ${colors.white};
  font-size: 18px;
`;
