import axios from 'axios';
import { API_URL } from '@src/api';

const TYPES = {
    MOVIES_REQUEST: 'MOVIES_REQUEST',
    MOVIES_REQUEST_SUCESS: 'MOVIES_REQUEST_SUCESS',
    MOVIES_REQUEST_FALURE: 'MOVIES_REQUEST_FALURE',
};

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

        dispatch({ type: TYPES.MOVIES_REQUEST_SUCESS, payload: { genres: genres, movies: videos, categoryList: result } });
        
    } catch (error) {
        dispatch({ type: TYPES.MOVIES_REQUEST_FALURE, payload: error });
        return error;
    }
}

export {
    TYPES,
    fetchMovies,
};

export default {
    TYPES,
    fetchMovies,
};
