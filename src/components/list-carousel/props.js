import { array, string, func, bool } from 'prop-types';

export const propTypes = {
    movies: array.isRequired,
    headerTitle: string,
    onPressViewAll: func,
    shouldShowViewAll: bool
};

export const defaultProps = {
    headerTitle: '',
    onPressViewAll: () => { },
    shouldShowViewAll: true
};
