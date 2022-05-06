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

export const ListCarousalItem =
    ({
        imageSrc,
        title,
        releaseDate,
        artist,
    }) => {
        const [isLoading, setIsLoading] = useState(true);

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
