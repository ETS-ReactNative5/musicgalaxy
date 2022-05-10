import get from 'lodash/get';

const getIsLoading = (state) => get(state, 'isLoading', true);
const getError = (state) => get(state, 'hasError', false);
const getMovies = (state) => get(state, 'moviesList', []);
const getGenres = (state) => get(state, 'genres', []);
const getcategorisedList = (state) => get(state, 'categorisedList', []);
const getYears = (state) => get(state, 'years', []);
const getSearchQuery = (state) => get(state, 'searchQuery', '');
const getGenreFilter = (state) => get(state, 'genreFilter', []);
const getYearFilter = (state) => get(state, 'yearFilter', []);


export {
    getIsLoading,
    getError,
    getMovies,
    getGenres,
    getcategorisedList,
    getYears,
    getSearchQuery,
    getGenreFilter,
    getYearFilter
};

export default {
    getIsLoading,
    getError,
    getMovies,
    getGenres,
    getcategorisedList,
    getYears,
    getSearchQuery,
    getGenreFilter,
    getYearFilter
};
