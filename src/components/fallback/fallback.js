import React from 'react';
import FastImage from 'react-native-fast-image';

import { TEST_IDS } from '@src/utils/constants';
import { Container, StyledImage, TitleText } from './styled';
import { propTypes, defaultProps } from './props';

/**
 * Component to show as a Fallback component in case of any faliure. Avoid App crashing
 *
 */
export const FallBackUI = () => {
    return (
        <Container>
            <StyledImage
                testID={TEST_IDS.FALLBACK_IMAGE_SRC}
                source={require('@assets/error.png')}
                resizeMode={FastImage.resizeMode.contain}
            />
            <TitleText testID={TEST_IDS.FALLBACK_TITLE}>
                Something went wrong while fetching the list of Music Videos :(
            </TitleText>
        </Container>
    );
};

FallBackUI.propTypes = propTypes;
FallBackUI.defaultProps = defaultProps;
