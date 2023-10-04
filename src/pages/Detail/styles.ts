import styled from 'styled-components/native';
import {colors, fonts} from '../../common';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const BoxContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-family: ${fonts.Inter_400Regular};
  color: ${colors.black};
  margin: 32px 0 24px;
`;