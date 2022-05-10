import axios from 'axios';
import { API_URL } from '@src/api';

const TYPES = {
    MOVIES_REQUEST: 'MOVIES_REQUEST',
    MOVIES_REQUEST_SUCESS: 'MOVIES_REQUEST_SUCESS',
    MOVIES_REQUEST_FALURE: 'MOVIES_REQUEST_FALURE',
    SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
    SET_FILTER_QUERY: 'SET_FILTER_QUERY',
    CLEAR_FILTERS: 'CLEAR_FILTERS',
};

const setSearchQuery = (query) => (dispatch) => {
    dispatch({ type: TYPES.SET_SEARCH_QUERY, payload: query });
}

const setFilterQuery = (query) => (dispatch) => {
    const { genres, years } = query;
    dispatch({ type: TYPES.SET_FILTER_QUERY, payload: { genres, years } });
}

const clearFilters = () => (dispatch) => {
    dispatch({ type: TYPES.CLEAR_FILTERS});
}

const fetchMovies = () => async (dispatch) => {
    dispatch({ type: TYPES.MOVIES_REQUEST });
    try {
        const response = await axios.get(API_URL);
        let mapping = {};
        let result = {};


        let { videos, genres } = response?.data;

        videos.forEach((video) => {
            mapping[video.genre_id] = [...(mapping[video.genre_id] || []), video]
        })

        genres.forEach((genre) => {
            if (mapping.hasOwnProperty(genre.id)) {
                result[genre.name] = mapping[genre.id]
            }
        })

        let years = [...new Set(videos.map((video) => (video.release_year)))];

        dispatch({ type: TYPES.MOVIES_REQUEST_SUCESS, payload: { genres: genres, movies: videos, categoryList: result, years: years } });

    } catch (error) {
        dispatch({ type: TYPES.MOVIES_REQUEST_FALURE, payload: error });
        return error;
    }
}

export {
    TYPES,
    fetchMovies,
    setSearchQuery,
    setFilterQuery,
    clearFilters
};

export default {
    TYPES,
    fetchMovies,
    setSearchQuery,
    setFilterQuery,
    clearFilters
};

