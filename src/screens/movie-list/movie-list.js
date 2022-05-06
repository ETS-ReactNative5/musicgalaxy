import React from 'react';
import { getcategorisedList } from '@src/redux/selector';

import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { MovieItem } from '@src/components/movie-item';
import { Container, TitleWrapper, StyledText } from './styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
/**
 * This screen is responsible to show the list 
 * of videos that are linked to specific genre 
 * of music and we are getting the category from
 * route params while navigating to this screen
 */
export const MovieList = ({ route }) => {
    const category = route.params.category || 'Hello';
    const movies = useSelector(getcategorisedList);
    const requiredList = movies[category];
    const insets= useSafeAreaInsets();

    return (
        <Container 
        insets={insets} 
        >
        <TitleWrapper>
            <StyledText>
                {`Watch Videos of ${category}`}
            </StyledText>
        </TitleWrapper>
        <FlatList
            data={requiredList}
            keyboardShouldPersistTaps='handled'
            keyExtractor={(item) => `movie-${item.id}`}
            listKey={(item)=> item.id}
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
        </Container>
    )
}