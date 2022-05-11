
import React, { useEffect, useState } from 'react';
import { BackHandler, Alert, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useBackHandler } from '@react-native-community/hooks'
import { useIsFocused } from '@react-navigation/native';
import { Wave } from 'react-native-animated-spinkit';
import { useNavigation } from '@react-navigation/native';

import { ListCarousal } from '@src/components/list-carousel';
import { ScrollableWithBannerLayout } from '@src/components/scrollable-with-banner-layout';
import { fetchMovies } from '@src/redux/actions';

import {
    getcategorisedList,
    getError,
    getGenreFilter,
    getIsLoading,
    getMovies,
    getSearchQuery,
    getYearFilter
} from '@src/redux/selector';

import { bannerImgSrc, NAVIGATION_ROUTES } from '@src/utils/constants';
import { APP_COLORS } from '@src/theme/colors';
import { FallBackUI } from '@src/components/fallback/fallback';
import { MovieItem } from '@src/components/movie-item';
import { LoaderWrapper } from './styled';


export const HomeScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const categories = useSelector(getcategorisedList) || [];
    const isLoading = useSelector(getIsLoading);
    const hasError = useSelector(getError);

    const [filteredData, setFilteredData] = useState([]);

    const searchQuery = useSelector(getSearchQuery);
    const genreQuery = useSelector(getGenreFilter);
    const yearQuery = useSelector(getYearFilter);

    const allMovies = useSelector(getMovies);

    const getFilteredData = () => {
        return allMovies.filter((movie) => {
            let filterResults = true;
            if (yearQuery?.length > 0) {
                filterResults = yearQuery.includes(movie.release_year)
            }
            if (genreQuery?.length > 0) {
                filterResults = filterResults && genreQuery.includes(movie.genre_id);
            }
            if (searchQuery?.length > 0) {
                filterResults = filterResults && (searchQuery == movie.artist || searchQuery == movie.title);
            }
            return filterResults;
        })
    };


    const shouldShowFilteredData = (searchQuery.length || genreQuery.length || yearQuery.length) && filteredData.length;


    useEffect(() => {
        setFilteredData(getFilteredData());
    }, [searchQuery.length, genreQuery.length, yearQuery.length]);

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
            <LoaderWrapper >
                <Wave size={70} color={APP_COLORS.orange} />
            </LoaderWrapper>
        ) : (
            <ScrollableWithBannerLayout
                showBackButton={false}
                title='Best Movies to Watch'
                bannerImageSrc={bannerImgSrc}
            >
                {shouldShowFilteredData ? (

                    <FlatList
                        data={filteredData}
                        keyboardShouldPersistTaps='handled'
                        keyExtractor={(item) => `list-${item.id}`}
                        listKey={`list`}
                        renderItem={({ item }) => (
                            <MovieItem
                                imageSrc={item.image_url}
                                artist={item.artist}
                                title={item.title}
                                releaseDate={item.release_year}
                                id={item.id}
                                isFeed={false}
                                key={item.id}
                            />
                        )}
                    />

                ) : (
                    Object.keys(categories).map((category) => {
                        return (
                            <ListCarousal
                                movies={categories[category].slice(0, 6)}
                                headerTitle={category}
                                key={category}
                                onPressViewAll={() => navigation.navigate(NAVIGATION_ROUTES.VIEW_ALL, { category: category })}
                                shouldShowViewAll={categories[category]?.length > 6}
                            />
                        )
                    })
                )}

            </ScrollableWithBannerLayout>
        ))
}