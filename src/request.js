// const API_KEY='10b3f7fec0d8856775c628b5cd5d2a92';

const requests={
    fetchTrending:`/trending/all/week?api_key=10b3f7fec0d8856775c628b5cd5d2a92&language=eng-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=10b3f7fec0d8856775c628b5cd5d2a92&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=10b3f7fec0d8856775c628b5cd5d2a92&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=10b3f7fec0d8856775c628b5cd5d2a92&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=10b3f7fec0d8856775c628b5cd5d2a92&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=10b3f7fec0d8856775c628b5cd5d2a92&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=10b3f7fec0d8856775c628b5cd5d2a92&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=10b3f7fec0d8856775c628b5cd5d2a92&with_genres=99`,

}
export default requests;