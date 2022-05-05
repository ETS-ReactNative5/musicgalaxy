import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Onboarding from 'react-native-onboarding-swiper';
import { scale } from '@src/utils/media';
import { APP_COLORS } from '@src/theme/colors';
import { navigate } from '@src/navigation/root-navigation';


export const pages = [
    {
        backgroundColor: APP_COLORS.black,
        image: <FastImage
            style={{
                height: scale(400),
                width: scale(400),
            }}
            source={require('@assets/pic1.png')}
            resizeMode='contain'
        />,
        title: 'Music Galaxy',
        subtitle: 'All your favourite songs in a single place',
    },
    {
        backgroundColor: APP_COLORS.green,
        image: <FastImage
            style={{
                height: scale(400),
                width: scale(400),
            }}
            source={require('@assets/pic2.png')}
            resizeMode='contain'
        />,
        title: 'Seemless Experience',
        subtitle: 'Refresh your mood with your favourite songs',
    },
    {
        backgroundColor: APP_COLORS.patternWhite,
        image: <FastImage
            style={{
                height: scale(400),
                width: scale(400),
            }}
            source={require('@assets/pic.png')}
            resizeMode='contain'
        />,
        title: 'Music Lovers',
        subtitle: "Hit the beat. All the lyrics you love!",
    },
]

export const Swipper = () => {

    return (
        <View style={{ height: '100%' }} >
            <Onboarding
                onDone={()=>navigate('Home')}
                showSkip={false}
                pages={pages}
            />
        </View>
    )
}
