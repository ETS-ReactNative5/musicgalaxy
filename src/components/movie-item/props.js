import { string, number } from 'prop-types';


export const propTypes = {
    imageSrc: string,
    title: string,
    rating: number,
    releaseDate: string,
    id: number.isRequired
};

export const defaultProps = {
    imageSrc: '',
    title: '',
    rating: 0,
    releaseDate: ''
};
