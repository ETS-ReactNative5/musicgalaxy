import { string, number } from 'prop-types';

export const propTypes = {
    imageSrc: string.isRequired,
    title: string.isRequired,
    releaseDate: number.isRequired,
    artist: string.isRequired,
};

export const defaultProps = {};
