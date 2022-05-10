import React, { useState, forwardRef } from 'react';
import {
  useAnimatedReaction,
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { StatusBar, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Components
import { LayoutHeader } from './header';
import { LayoutBanner } from './banner';

import {
  BodyWrapper,
  Container,
  HEADER_TITLE_HEIGHT,
} from './styled';

/**
 * ScrollableWithBannerLayout Parallax Effect Component
 */
export const ScrollableWithBannerLayout = forwardRef(({
  bannerImageSrc,
  children,
  title,
  isLoading,
  showBackButton,
}, ref) => {

  const { width: windowWidth } = useWindowDimensions();
  const BANNER_IMAGE_HEIGHT = windowWidth / 2;
  const SCROLL_OFFSET = HEADER_TITLE_HEIGHT + BANNER_IMAGE_HEIGHT;

  const [scrollOffset, setScrollOffset] = useState(SCROLL_OFFSET);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const scrollY = useSharedValue(0);
  const insets = useSafeAreaInsets();


  useAnimatedReaction(() => scrollY.value, (scrollY) => {
    /*
     * Handles `title` visibility on sticky header based on `isHeaderVisible`
     * and `scrollY` position as compared to `SCROLL_OFFSET`
     */
    if (title) {
      if (scrollY < scrollOffset && isHeaderVisible) {
        runOnJS(setIsHeaderVisible)(false);
      } else if (scrollY >= scrollOffset && !isHeaderVisible) {
        runOnJS(setIsHeaderVisible)(true);
      }
    }
  }, [scrollY, isHeaderVisible]);

  const headerTitleStyles = useAnimatedStyle(() => ({
    opacity: scrollY.value < scrollOffset ? 0.6 : 1
  }));

  const renderBody = () => (
    <React.Fragment>
      <BodyWrapper
        windowWidth={windowWidth}
        hasBannerImage
        insets={insets}
        isLoading={isLoading}
      >
        {children}
      </BodyWrapper>
    </React.Fragment>
  );

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <React.Fragment>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <LayoutHeader
        showBackButton={showBackButton}
        title={title}
        scrollY={scrollY}
        headerTitleStyles={headerTitleStyles}
      />

      <LayoutBanner
        scrollY={scrollY}
        bannerImageSrc={bannerImageSrc}
        height={windowWidth}
        insets={insets}

      />
      <Container
        insets={insets}
        data={[{ key: 1, data: 'empty list' }]}
        keyboardShouldPersistTaps='handled'
        onScroll={scrollHandler}
        ref={ref}
        listKey={Math.random().toString()}
        renderItem={renderBody}
        scrollEventThrottle={25}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `topicDetail-${item?.key}-${item?.data}`}
      />

    </React.Fragment>
  );
});

