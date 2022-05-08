import { useNavigation } from '@react-navigation/native';
import { ListCarousal } from '@src/components/list-carousel';
import { ScrollableWithBannerLayout } from '@src/components/scrollable-with-banner-layout';
import { fetchMovies } from '@src/redux/actions';
import { getcategorisedList, getError, getIsLoading } from '@src/redux/selector';
import { bannerImgSrc, NAVIGATION_ROUTES } from '@src/utils/constants';
import React, { useEffect } from 'react';
import { View, BackHandler, Alert, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks'
import { useIsFocused } from '@react-navigation/native';
import { Wave } from 'react-native-animated-spinkit';
import { APP_COLORS } from '@src/theme/colors';
import FastImage from 'react-native-fast-image';
import { FallBackUI } from '@src/components/fallback/fallback';


export const HomeScreen = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getcategorisedList) || [];
    const isLoading = useSelector(getIsLoading);
    const hasError = useSelector(getError);

    const navigation = useNavigation();
    const isFocused = useIsFocused();


    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    /**
     * Handle the hardware button of Android to avoid
     * returning back to onboarding screens and it should apply on 
     * the Home Screen as we need it only in this screen and on the other 
     * screens we need this default handling behaviour of back handler
     */
    useBackHandler(() => {
        if (isFocused) {
            Alert.alert(
                'Exit App',
                'Exiting the application?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp(),
                    },
                ],
                {
                    cancelable: false,
                },
            );
            return true;
        } else {
            navigation.canGoBack();
            return false;
        }
    })

    /**
     * This early return condition is reponsible to handle the Fallback in case
     * of API failure.
     */
    if (!isLoading && hasError) {
        return <FallBackUI />
    }
    return (
        isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Wave size={70} color={APP_COLORS.orange} />
            </View>
        ) : (
            <ScrollableWithBannerLayout
                showBackButton={false}
                title='Best Movies to Watch'
                bannerImageSrc={bannerImgSrc}
            >
                {Object.keys(categories).map((category) => {
                    return (
                        <ListCarousal
                            movies={categories[category].slice(0, 6)}
                            headerTitle={category}
                            onPressViewAll={() => navigation.navigate(NAVIGATION_ROUTES.VIEW_ALL, { category: category })}
                            shouldShowViewAll={categories[category]?.length > 6}
                        />
                    )
                })}
            </ScrollableWithBannerLayout>
        ))
}