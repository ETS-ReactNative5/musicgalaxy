import { scale } from '@src/utils/media';
import { Platform } from 'react-native';

import styled from 'styled-components/native';

import { AnimatedFlatList } from './animated-flat-list';
/**
 * Constants
 */
// export const BANNER_IMAGE_WIDTH = width || 0;

export const HEADER_HEIGHT = Platform.select({
  ios: 50,
  android: 60,
});

export const IMAGE_SCALE_FACTOR = 1.5;

const TITLE_FONT_SIZE = 28;
const TITLE_MARGIN_VERTICAL = 12;
export const HEADER_TITLE_HEIGHT = TITLE_FONT_SIZE + TITLE_MARGIN_VERTICAL;

const getBannerImageHeight = (windowWidth) => windowWidth / 2;

const getContainerMargins = (insets, windowWidth) => {
  return Platform.OS === 'ios' ? getBannerImageHeight(windowWidth) : getBannerImageHeight(windowWidth) + 50;
};

export const getContainerContentContainerStyles = (isTabBarVisible, insets) => {
  const paddingBottom = isTabBarVisible
    ? Platform.select({ ios: 56 + insets.bottom, android: 0 })
    : 0;
  return { paddingBottom };
};

export const Container = styled(AnimatedFlatList)`
  background-color: transparent;
  margin-top: ${Platform.select({
  ios: scale(50),
  android: scale(100),
})}px;
  height: 100%;
  
`;

export const ImagePressable = styled.TouchableOpacity`
  width: 100%;
  height: ${({ windowWidth }) => getBannerImageHeight(windowWidth)}px;
  position: absolute;
  z-index: 2;
`;

export const BodyWrapper = styled.View`
  background-color: white;
  flex:1;
  padding-bottom: ${({ insets }) => insets.bottom}px;
  margin-top: ${({ hasBannerImage, insets, isLoading, windowWidth }) => (isLoading
    ? 0
    : getContainerMargins(insets, windowWidth))}px;
`;

export const BannerWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: -16px;
  left: 16px;
  border-radius:4px;
  overflow: hidden;
`;
