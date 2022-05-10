import axios from 'axios';

export const get = async (url, options, params) => {
  try {
    const response = await axios.get(
      `${url}${toQueryString(params)}`,
      options,
    );
    return response.data;
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
};