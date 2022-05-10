import { APP_COLORS } from '@src/theme/colors';
import { scale } from '@src/utils/media';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${APP_COLORS.white};
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(FastImage)`
  height: 20%;
  width: 60%;
`;

export const TitleText = styled.Text`
  text-align: center;
  font-size: ${scale(16)}px;
  color: red;
  padding-horizontal: 10px;
`;
