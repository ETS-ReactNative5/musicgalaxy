import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

export const FallBackUI = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
            <FastImage
                style={{ height: '20%', width: '90%' }}
                source={require('@assets/error.png')}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{ textAlign: 'center', fontSize: 16, color: 'red' }} >
                Something went wrong while fetching the list of Music Videos :(
            </Text>
        </View>
    )
}