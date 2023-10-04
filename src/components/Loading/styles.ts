import styled from 'styled-components/native';
import {colors, fonts} from '../../common';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.rgbaGrayDark};
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.Inter_400Regular};
  font-size: 24px;
  margin-top: 28px;
  text-align: center;
`;
