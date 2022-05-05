import get from 'lodash/get';

const getIsLoading = (state) => get(state, 'isLoading', true);
const getError = (state) => get(state, 'hasError', false);
const getMovies = (state) => get(state, 'moviesList', []);
const getGenres = (state) => get(state, 'genres', []);
const getcategorisedList = (state) => get(state, 'categorisedList', []);


export {
    getIsLoading,
    getError,
    getMovies,
    getGenres,
    getcategorisedList
};

export default {
    getIsLoading,
    getError,
    getMovies,
    getGenres,
    getcategorisedList
};
