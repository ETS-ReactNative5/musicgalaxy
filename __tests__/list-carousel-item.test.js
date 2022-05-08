import React from 'react';

import { render } from '@testing-library/react-native';
import { TEST_IDS } from '@src/utils/constants';
import { ListCarousalItem } from '@src/components/list-carousel/list-carousel-item';

const sampleProps = {
    imageSrc: { uri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png' },
    title: 'Test',
    releaseDate: '28 May, 2022',
    artist: 'Robert',
};

const ImgSrc = require('@assets/loading.png');

describe('Testing List Carousel Item Component', () => {

    it('should match the Fallback component snapshot', () => {
        const { toJSON } = render(<ListCarousalItem {...sampleProps} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render List Carousel Item title correctly', () => {
        const { getByTestId } = render(<ListCarousalItem {...sampleProps} />);
        expect(getByTestId(TEST_IDS.LIST_CAROUSEL_ITEM_TITLE).props.children).toBe('Test');
    });

    it('should render List Carousel Item Release date correctly', () => {
        const { getByTestId } = render(<ListCarousalItem {...sampleProps} />);
        expect(getByTestId(TEST_IDS.LIST_CAROUSEL_ITEM_ARTIST_TEXT).props.children).toBe('Robert');
    });

    it('should render List Carousel Item Artist Name correctly', () => {
        const { getByTestId } = render(<ListCarousalItem {...sampleProps} />);
        expect(getByTestId(TEST_IDS.LIST_CAROUSEL_ITEM_RELEASE_DATE).props.children).toBe('28 May, 2022');
    });

    it('should render List Carousel Item Loading Image Source correctly', () => {
        const { queryByTestId } = render(<ListCarousalItem {...sampleProps} />);
        expect(queryByTestId(TEST_IDS.LIST_CAROUSEL_ITEM_IMAGE_SRC).props.source).toBe(ImgSrc);
    });

});

