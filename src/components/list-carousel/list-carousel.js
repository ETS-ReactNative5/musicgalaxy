import React from 'react';
import { FlatList } from 'react-native';

import { ListCarousalItem } from './list-carousel-item';
import { CarouselListHeader, CarouselListWrapper, HeaderContainer, ViewAll } from './styled';
import { defaultProps, propTypes } from './props';
import { TEST_IDS } from '@src/utils/constants';

/**
 * This component is responsible to render the list of 
 * Music Video Cards and expects the array of movies to render
 * in each carousel based on the Genre of Music
 */
export const ListCarousal =
    ({
        movies,
        headerTitle,
        shouldShowViewAll,
        onPressViewAll
    }) => {

        const renderItem = ({ item }) => (
            <ListCarousalItem
                imageSrc={item.image_url}
                artist={item.artist}
                title={item.title}
                releaseDate={item.release_year}
                id={item.id}
                isFeed
            />
        );

        return (
            <CarouselListWrapper>
                <HeaderContainer>
                    <CarouselListHeader testID={TEST_IDS.LIST_CAROUSEL_HEADER_TITLE} >
                        {headerTitle}
                    </CarouselListHeader>
                    {
                        shouldShowViewAll &&
                        (
                            <ViewAll onPress={onPressViewAll} testID={TEST_IDS.LIST_CAROUSEL_SEE_ALL_TITLE} >
                                See All
                            </ViewAll>
                        )
                    }

                </HeaderContainer>
                <FlatList
                    testID={TEST_IDS.LIST_CAROUSEL_FLATLIST}
                    horizontal
                    data={movies}
                    keyboardShouldPersistTaps='handled'
                    keyExtractor={(item) => `list-carousel-${item.id}`}
                    listKey={Math.random().toString()}
                    renderItem={renderItem}
                />
            </CarouselListWrapper>

        )
    };


ListCarousal.propTypes = propTypes;
ListCarousal.defaultProps = defaultProps;
