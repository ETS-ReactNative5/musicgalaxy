import actions from './actions';

export const initialState = {
    moviesList: [],
    isLoading: true,
    hasError: false,
    genres: [],
    categorisedList: [],
    years: [],
    searchQuery: '',
    genreFilter: [],
    yearFilter: []
};

const moviesReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case actions.TYPES.MOVIES_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actions.TYPES.MOVIES_REQUEST_SUCESS: {
            return {
                ...state,
                isLoading: false,
                genres: payload.genres,
                moviesList: payload.movies,
                categorisedList: payload.categoryList,
                years: payload.years
            }
        }
        case actions.TYPES.MOVIES_REQUEST_FALURE: {
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        }

        case actions.TYPES.SET_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: payload
            }
        }

        case actions.TYPES.SET_FILTER_QUERY: {
            return {
                ...state,
                genreFilter: payload.genres,
                yearFilter: payload.years
            }
        }

        case actions.TYPES.CLEAR_FILTERS: {
            return {
                ...state,
                genreFilter: [],
                yearFilter: []
            }
        }


        default:
            return state;
    }
};

export default moviesReducer;
