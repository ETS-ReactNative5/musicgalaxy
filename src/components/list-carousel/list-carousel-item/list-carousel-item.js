import React, { useState } from 'react';

import {
    StyledImage,
    StyledWrapper,
    MovieInfoWrapper,
    Title,
    MetaInfo,
    Container,
    SubTitle,
} from './styled';

/**
 * Carousel Item component of individual List Item containing info 
 * about the Music Video like Img, Title, Artist etc
 */
export const ListCarousalItem =
    ({
        imageSrc,
        title,
        releaseDate,
        artist,
    }) => {
        const [isLoading, setIsLoading] = useState(true);
        /**
         * Function used to set the image source of item card
         * based on the loading state of image and showing the 
         * loading indicator placeholder instead of actual loader
         * to make the UI responsive  
         */
        const getImageSrc = () => {
            if (isLoading) {
                return require('@assets/loading.png')
            } else {
                return { uri: imageSrc }
            }
        }

        return (
            <Container>
                <StyledWrapper>
                    <StyledImage
                        onLoadEnd={() => setIsLoading(false)}
                        source={getImageSrc()}
                    />
                    <MovieInfoWrapper>
                        <Title>
                            {title}
                        </Title>
                    </MovieInfoWrapper>
                </StyledWrapper>
                <MetaInfo>
                    <SubTitle>
                        {artist}
                    </SubTitle>
                    <SubTitle>
                        {releaseDate}
                    </SubTitle>
                </MetaInfo>
            </Container>
        )
    };
