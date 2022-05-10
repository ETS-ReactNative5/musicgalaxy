import { APP_COLORS } from '@src/theme/colors';
import { TEST_IDS } from '@src/utils/constants';
import React from 'react';
import { View } from 'react-native';

import { StyledTextInput } from './styled';
/**
 * Generic Text Input component to render the Custom Input with Icon in it
 */
export const TextInput = ({ LeftIcon, ...props }) => {
  return (
    <View>
      {LeftIcon}
      <StyledTextInput
        testID={TEST_IDS.TEXT_INPUT}
        placeholderTextColor={APP_COLORS.red}
        {...props}
      />
    </View>
  );
};
