import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import FastImage  from 'react-native-fast-image';

import {
  HEADER_HEIGHT,
  IMAGE_SCALE_FACTOR,
} from '../styled';

const getBannerImageHeight = (windowWidth) => windowWidth / 2;

const getBannerHeight = (insets) => Platform.select({
  ios: insets.top + HEADER_HEIGHT,
  android: 0,
});


export const BannerImageWrapper = styled.TouchableOpacity`
  position: relative;
  width: ${({ windowWidth }) => windowWidth * IMAGE_SCALE_FACTOR}px;
  height: ${({ insets }) => getBannerHeight(insets)};
  z-index: 1
`;

export const BannerPlaceholder = styled(Animated.Image)`
  position: absolute;
  top: ${({ insets }) => insets.top}px;
  resize-mode: contain;
  background-color: red;
  z-index: 222;
`;

export const BannerImage = styled(Animated.createAnimatedComponent(FastImage))`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({ windowWidth }) => getBannerImageHeight(windowWidth) * IMAGE_SCALE_FACTOR}px;
  resize-mode: contain;
  left: -${({ windowWidth }) => (windowWidth * IMAGE_SCALE_FACTOR - windowWidth )/ 2}px;
  width: ${({ windowWidth }) => windowWidth * IMAGE_SCALE_FACTOR}px;
  background-color: gray;
`;

export const LoaderWrapper = styled.View`
  position: absolute;
  height: 5%;
  width: ${({ windowWidth }) => windowWidth}px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Banner = styled.TouchableOpacity``;

export const BannerOverlay = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background-color: black;
  opacity: 0.5;  
`;

export const TextWrapper = styled.View`
  position: absolute;
  top: 220;
  background: black;
  opacity: 0.6;
  width: 100%;
  height: 80;
  align-items: center;
  justify-content: center;
  left: -${({ windowWidth }) => (windowWidth * IMAGE_SCALE_FACTOR - windowWidth )/ 2}px;
  width: ${({ windowWidth }) => windowWidth * IMAGE_SCALE_FACTOR}px;
`;

export const StyledText = styled.Text`
 text-align: center;
 color: white;
 font-weight: bold;
 font-size: 20;
`;