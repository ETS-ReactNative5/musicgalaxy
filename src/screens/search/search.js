
import { useNavigation } from '@react-navigation/native';
import { MovieItem } from '@src/components/movie-item';
import { getGenres, getMovies } from '@src/redux/selector';


import { NAVIGATION_ROUTES, searchIconSvg } from '@src/utils/constants';
import { scale } from '@src/utils/media';
import React, { useState } from 'react';
import { FlatList, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { InputWrapper, LeftIconWrapper, MainWrapper, SearchIcon, StyledInput } from './styled';

export const Search = () => {

    const [searchResults, setSearchResults] = useState('');
    const [results, setResults] = useState([]);

    const genre = useSelector(getGenres);
    const allMovies = useSelector(getMovies);

    const { width } = Dimensions.get('window');
    const navigation = useNavigation();

    const onPressItem = (category) => {
        navigation.navigate(NAVIGATION_ROUTES.VIEW_ALL, { category })
    }

    const onEndEditing = (searchText) => {
        const filteredMovies = allMovies.filter((movie) => movie.artist == searchText || movie.title == searchText);
        setResults(filteredMovies);
    }

    const renderItem = ({ item }) => {
        let itemWidth = width / 2 - scale(40);
        return (
            <TouchableOpacity onPress={() => onPressItem(item.name)} >
                <LinearGradient
                    colors={['#2a40a7', '#2e2d29']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        borderRadius: 10,
                        height: 110,
                        width: itemWidth,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 8,
                    }} >
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }} >{item.name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <MainWrapper
            colors={['purple', 'white']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <InputWrapper>
                <StyledInput
                    onChangeText={setSearchResults}
                    value={searchResults}
                    placeholder="Search by Artist or Song Title"
                    leftIconPadding={scale(40)}
                    returnKeyType='search'
                    onSubmitEditing={({ nativeEvent }) => onEndEditing(nativeEvent.text)}
                    LeftIcon={
                        <LeftIconWrapper>
                            <SearchIcon fill={'white'} size={scale(20)} xml={searchIconSvg} />
                        </LeftIconWrapper>
                    }
                />
            </InputWrapper>

            {
                searchResults && results && results?.length > 0 ? (
                    <FlatList
                        key='_'
                        data={results}
                        keyboardShouldPersistTaps='handled'
                        keyExtractor={(item) => `movie-${item.id}`}
                        listKey={(item) => `movie-${item.id}`}
                        renderItem={({ item }) => (
                            <MovieItem
                                imageSrc={item.image_url}
                                artist={item.artist}
                                title={item.title}
                                releaseDate={item.release_year}
                                id={item.id}
                                isFeed={false}
                            />
                        )}
                    />
                ) : (
                    <FlatList
                        key='*'
                        data={genre}
                        keyboardShouldPersistTaps='handled'
                        keyExtractor={(item) => `list-carousel-${item.id}`}
                        listKey={(item) => `list-carousel-${item.id}`}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        renderItem={renderItem}
                    />
                )
            }

        </MainWrapper>
    )
}