import axios from "axios";

const API_KEY = '799d796b985f1f6ed2e5b2e723499181';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY,
        _limit: 10,
    }
})

export const getMoviesByQuery = async (q) => {
  try {
    const response = await axios('/search/movie', {
      params: {
        api_key: API_KEY,
        query: q,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getGenres = async () => {
    try {
      const genres = await axios('/genre/movie/list', {
        params: {
          api_key: API_KEY,
          
        },
      });

      return genres.data.genres;
    } catch (error) {
      console.log(error);
    }
  }

export const getMovieByID = async(id) => {
    try {
      const response = await axios(`/movie/${id}`, {
        params: {
          api_key: API_KEY,
        }
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }


export const getMovies = async(_page = 1) => {
    const {data} = await instance.get("/trending/movie/day", {
        params: {
            api_key: API_KEY,
            _page,
        }
    })
    return data;
}

export const getCreditsByID = async(id) => {
  try {
    const response = await axios(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      }
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}