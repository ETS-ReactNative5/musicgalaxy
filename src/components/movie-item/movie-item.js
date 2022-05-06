import React from 'react';

import {
    StyledImage,
    StyledWrapper,
    MovieInfoWrapper,
    Title,
    Container,
    SubTitle,
} from './styled';

export const MovieItem =
    ({
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
    };
