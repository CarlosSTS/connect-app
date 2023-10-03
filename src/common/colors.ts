import {darken, lighten} from 'polished';
import {Platform} from 'react-native';

const primaryColor = '#3D9BE9';
const white = '#FFF';
const black = '#000';

const colors = {
  backgroundColor: Platform.OS === 'ios' ? '#EFEFF4' : '#F5F5F9',
  black,
  blackLight: lighten(0.3, black),
  white,
  rgbaGrayDark: '#000A',
  grayDark: '#7A7A7A',
  grayContainerDark: '#DCDCDC',
  transparent: 'transparent',
  greenLight: '#00C851',
  error: '#F53030',
  primaryColor,
  primaryColorDark: darken(0.4, primaryColor),
  primaryColorLight: lighten(0.3, primaryColor),
  whiteDark: darken(0.2, white),
  placeholder: '#737380',
};

export default colors;
