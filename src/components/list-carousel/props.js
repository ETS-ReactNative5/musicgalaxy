import { array, string, func, bool } from 'prop-types';

export const propTypes = {
    movies: array.isRequired,
    headerTitle: string.isRequired,
    shouldShowViewAll: bool,
    onPressViewAll: func
};

export const defaultProps = {
    shouldShowViewAll: false,
    onPressViewAll: () => { }
};
