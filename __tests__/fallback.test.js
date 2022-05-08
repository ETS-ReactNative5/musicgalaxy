import React from 'react';

import { FallBackUI } from '@src/components/fallback/fallback';
import { render } from '@testing-library/react-native';
import { TEST_IDS } from '@src/utils/constants';

const imgSource = require('@assets/error.png');

describe('Testing FallBack Component', () => {

    it('should match the Fallback component snapshot', () => {
        const { toJSON } = render(<FallBackUI />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render Fallback error message correctly', () => {
        const { getByTestId } = render(<FallBackUI />);
        expect(getByTestId(TEST_IDS.FALLBACK_TITLE).props.children).toBe('Something went wrong while fetching the list of Music Videos :(');
    });

    it('should render Fallback error image source correctly', () => {
        const { queryByTestId } = render(<FallBackUI />);
        expect(queryByTestId(TEST_IDS.FALLBACK_IMAGE_SRC).props.source).toBe(imgSource);
    });

});

