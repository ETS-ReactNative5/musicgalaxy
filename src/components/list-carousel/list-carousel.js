import React from 'react';
import { FlatList } from 'react-native';

import { ListCarousalItem } from './list-carousel-item';
import { CarouselListHeader, CarouselListWrapper, HeaderContainer, ViewAll } from './styled';
import { defaultProps, propTypes } from './props';

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
                    <CarouselListHeader>
                        {headerTitle}
                    </CarouselListHeader>
                    {
                        shouldShowViewAll &&
                        (
                            <ViewAll onPress={onPressViewAll} >
                                See All
                            </ViewAll>
                        )
                    }

                </HeaderContainer>
                <FlatList
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
