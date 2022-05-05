import { useNavigation } from '@react-navigation/native';
import { ListCarousal } from '@src/components/list-carousel';
import { ScrollableWithBannerLayout } from '@src/components/scrollable-with-banner-layout';
import { fetchMovies } from '@src/redux/actions';
import { getcategorisedList, getIsLoading, getMovies } from '@src/redux/selector';
import { bannerImgSrc, NAVIGATION_ROUTES } from '@src/utils/constants';
import React, { useEffect } from 'react';
import { View, BackHandler, Alert, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks'
import { useIsFocused } from '@react-navigation/native';
import { Wave } from 'react-native-animated-spinkit';
import { APP_COLORS } from '@src/theme/colors';


export const HomeScreen = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getcategorisedList) || [];
    const isLoading = useSelector(getIsLoading);
    const navigation = useNavigation();
    const isFocused = useIsFocused();


    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

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