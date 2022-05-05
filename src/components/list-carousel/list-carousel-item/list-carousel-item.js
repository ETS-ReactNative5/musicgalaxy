import React from 'react';

import {
    StyledImage,
    StyledWrapper,
    MovieInfoWrapper,
    Title,
    MetaInfo,
    Container,
    SubTitle,
} from './styled';

export const ListCarousalItem =
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
