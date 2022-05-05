import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
/**
 * useAnimatedScrollHandler not working with <FlatList>
 * Issue Referece:
 * https://github.com/software-mansion/react-native-reanimated/issues/1249#issuecomment-695313203
 */
const FlatListWithEventThrottle = forwardRef((props, ref) => (
  <FlatList
    {...props}
    scrollEventThrottle={25}
    ref={ref}
  />
));

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatListWithEventThrottle);
