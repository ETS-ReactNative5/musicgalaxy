import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import ImageView from "react-native-image-viewing";
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

import {
  BannerOverlay,
  BannerImage,
  BannerImageWrapper,
  TextWrapper,
  StyledText,
} from './styled';

import { IMAGE_SCALE_FACTOR } from '../styled';

export const LayoutBanner =
  ({
    insets,
    bannerTitle,
    bannerImageSrc,
    scrollY,
  }) => {
    const [visible, setIsVisible] = useState(false);

    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    const animatedStyles = useAnimatedStyle(() => {
      const bannerImageScale = interpolate(scrollY.value,
        [-windowHeight, 0],
        [10 / IMAGE_SCALE_FACTOR, 1],
        'clamp');

      const bannerImageTranslateY = interpolate(scrollY.value,
        [0, windowHeight],
        [0, -windowHeight / 3],
        'clamp');

      return {
        transform: [
          { scale: bannerImageScale },
          { translateY: bannerImageTranslateY },
        ],
      };
    });

    return (
      <>
        <BannerImageWrapper
          windowWidth={windowWidth}
          insets={insets}
          activeOpacity={1}
          onPress={() => setIsVisible(true)}
        >
          <BannerImage
            insets={insets}
            source={{ uri: bannerImageSrc }}
            style={animatedStyles}
            windowWidth={windowWidth}
            height={windowWidth}
            resizeMode={FastImage.resizeMode.cover}
          />
        </BannerImageWrapper>
        <BannerOverlay />
        {bannerTitle && (
          <TextWrapper windowWidth={windowWidth}>
            <StyledText>
              {bannerTitle}
            </StyledText>
          </TextWrapper>
        )
        }
        <ImageView
          images={[{ uri: bannerImageSrc }]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </>
    );
  };
