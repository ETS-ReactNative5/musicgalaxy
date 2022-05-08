import { TEST_IDS } from '@src/utils/constants';
import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
/**
 * Component to show as a Fallback component in case of any faliure. Avoid App crashing
 * 
 */
export const FallBackUI = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            <FastImage
                testID={TEST_IDS.FALLBACK_IMAGE_SRC}
                style={{ height: '20%', width: '90%' }}
                source={require('@assets/error.png')}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text 
            style={{ textAlign: 'center', fontSize: 16, color: 'red' }}
            testID={TEST_IDS.FALLBACK_TITLE}
             >
                Something went wrong while fetching the list of Music Videos :(
            </Text>
        </View>
    )
}