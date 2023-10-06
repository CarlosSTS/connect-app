import styled, {css} from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {colors, fonts} from '../../common';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;

  background: ${colors.white};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${colors.transparent};

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.primaryColor};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.black};
  font-size: 16px;
  font-family: ${fonts.Inter_400Regular};
  margin-left: 16px;
`;

export const ButtonIcon = styled(RectButton).attrs({})`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
export const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: 14px;
  padding: 0 20px;
  font-family: ${fonts.Inter_400Regular};
  align-self: flex-start;
`;
