import React from 'react';
import { FlatList } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { NAVIGATION_ROUTES, TEST_IDS } from '@src/utils/constants';
import { ListCarousal } from '@src/components/list-carousel';
import { ListCarousalItem } from '@src/components/list-carousel/list-carousel-item';


const sampleProps = {
    headerTitle: 'Rock',
    movies: [
        {
            artist: "El Koala",
            genre_id: 8,
            id: 501649,
            release_year: 2014,
            title: "Veni paca to"
        },
        {
            artist: "Tom Petty and the Heartbreakers",
            genre_id: 8,
            id: 501895,
            release_year: 2010,
            title: "I Should Have Known It"
        }
    ],
    onPressViewAll: jest.fn,
    shouldShowViewAll: true
};

describe('Testing List Carousel Component', () => {

    it('should match the List Carousel component snapshot', () => {
        const { toJSON } = render(<ListCarousal {...sampleProps} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render List Carousel Header title correctly', () => {
        const { getByTestId } = render(<ListCarousal {...sampleProps} />);
        expect(getByTestId(TEST_IDS.LIST_CAROUSEL_HEADER_TITLE).props.children).toBe('Rock');
    });

    it('should render List Carousel See All correctly', () => {
        const { getByTestId } = render(<ListCarousal {...sampleProps} />);
        expect(getByTestId(TEST_IDS.LIST_CAROUSEL_SEE_ALL_TITLE).props.children).toBe('See All');
    });

    it('should not render List Carousel See All correctly', () => {
        const { queryByTestId } = render(<ListCarousal {...sampleProps} shouldShowViewAll={false} />);
        expect(queryByTestId(TEST_IDS.LIST_CAROUSEL_SEE_ALL_TITLE)).toBeNull();
    });

    it('should navigate to Movie List Screen upon pressing on See All Text', () => {
        const mockedFunc = jest.fn();
        const { getByTestId } = render(<ListCarousal {...sampleProps} onPressViewAll={mockedFunc} />);
        fireEvent(getByTestId(TEST_IDS.LIST_CAROUSEL_SEE_ALL_TITLE), 'press');
        expect(mockedFunc).toHaveBeenCalledWith();
    });

    it('should not render List Carousel Flatlist correctly', () => {
        const { UNSAFE_getAllByType } = render(<ListCarousal {...sampleProps} />);
        expect(UNSAFE_getAllByType(FlatList).length).toBe(1)
    });

    it('should not render List Carousel Flatlist correctly with 2 render Items', () => {
        const { UNSAFE_getAllByType } = render(<ListCarousal {...sampleProps} />);
        expect(UNSAFE_getAllByType(ListCarousalItem).length).toBe(sampleProps.movies.length);
    });

});

