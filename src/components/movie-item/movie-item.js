import React, { memo } from 'react';

import {
    StyledImage,
    StyledWrapper,
    MovieInfoWrapper,
    Title,
    Container,
    SubTitle,
} from './styled';

import { defaultProps, propTypes } from './props';

/**
 * Carousel Item component of individual List Item containing info 
 * about the Music Video like Img, Title, Artist etc
 */

export const MovieItem =
    memo(({
        imageSrc,
        title,
        releaseDate,
        artist,
    }) => {
        return (
            <Container>
                <StyledWrapper>
                    <StyledImage
                        source={{ uri: imageSrc }}
                    />
                    <MovieInfoWrapper>
                        <Title>
                            {title}
                        </Title>
                        <SubTitle>
                            {artist}
                        </SubTitle>
                        <SubTitle>
                            {releaseDate}
                        </SubTitle>
                    </MovieInfoWrapper>
                </StyledWrapper>
            </Container>
        )
    });

MovieItem.propTypes = propTypes;
MovieItem.defaultProps = defaultProps;
