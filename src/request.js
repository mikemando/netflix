const API_KEY = "0e41619d58c0a8d5c59e07dc26b6bab9";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discovery/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discovery/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
