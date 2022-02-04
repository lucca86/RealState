import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '852eab8730mshcde623b450f9e4ep10e2d1jsn9f74f76ea1e5'
          }
    });

    return data;
}