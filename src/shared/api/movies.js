import axios from "axios";

const API_KEY = '799d796b985f1f6ed2e5b2e723499181';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        _limit: 12,
    }
})


export const getMovies = async(_page = 1) => {
    const {data} = await instance.get("/trending/movie/day", {
        params: {
            api_key: API_KEY,
            _page,
        }
    })
    return data;
}
