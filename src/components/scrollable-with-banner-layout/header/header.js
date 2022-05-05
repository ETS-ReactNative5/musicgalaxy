import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { backIconSvg, NAVIGATION_ROUTES, searchIconSvg } from '@src/utils/constants';

import { StyledWrapper, StyledIcon, Title, SearchIcon } from './styled';

export const LayoutHeader =
  ({
    title,
    headerTitleStyles,
    showBackButton,
  }) => {

    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const onPressBack = () => navigation.goBack();
    const onPressSearch = () => navigation.navigate(NAVIGATION_ROUTES.SEARCH);

    return (
      <StyledWrapper insets={insets} style={headerTitleStyles}>
        {showBackButton && (
          <TouchableOpacity
            style={{ zIndex: 11 }}
            onPress={onPressBack}
          >
            <StyledIcon
              fill={'black'}
              xml={backIconSvg}
            />
          </TouchableOpacity>

        )}
        <Title showBackButton={showBackButton} >
          {title}
        </Title>
        <TouchableOpacity
          style={{ zIndex: 11 }}
          onPress={onPressSearch}
        >
          <SearchIcon
            fill={'black'}
            xml={searchIconSvg}
          />
        </TouchableOpacity>
      </StyledWrapper>

    );
  };

