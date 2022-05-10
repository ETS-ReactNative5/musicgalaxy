import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';

import { APP_COLORS } from '@src/theme/colors';
import { save } from '@src/utils/storage';

import { StyledImage, StyledView } from './styled';
import { defaultProps, propTypes } from './props';

/**
 * This component is responsible to show user a first visit
 * onboarding kind of experience
 */
export const pages = [
    {
        backgroundColor: APP_COLORS.black,
        image: <StyledImage
            source={require('@assets/pic1.png')}
            resizeMode='contain'
        />,
        title: 'Music Galaxy',
        subtitle: 'All your favourite songs in a single place',
    },
    {
        backgroundColor: APP_COLORS.green,
        image: <StyledImage
            source={require('@assets/pic2.png')}
            resizeMode='contain'
        />,
        title: 'Seemless Experience',
        subtitle: 'Refresh your mood with your favourite songs',
    },
    {
        backgroundColor: APP_COLORS.patternWhite,
        image: <StyledImage
            source={require('@assets/pic.png')}
            resizeMode='contain'
        />,
        title: 'Music Lovers',
        subtitle: "Hit the beat. All the lyrics you love!",
    },
]

export const Swipper = () => {

    const navigation = useNavigation();

    const onComplete = () => {
        navigation.navigate('Home');
        save('new_app_installed', 'true');
    }
    return (
        <StyledView>
            <Onboarding
                onDone={onComplete}
                showSkip={false}
                pages={pages}
            />
        </StyledView>
    )
}

Swipper.defaultProps = defaultProps;
Swipper.propTypes = propTypes;
