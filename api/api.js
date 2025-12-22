const API_KEY = "9e364d18136e5e08c2c0f734f76ad009"; 

export const fetchSearchData = async (query) => {


    let data = {
        movies: null,
        people: null
    };

const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    try {
        const response = await fetch(movieUrl);
        const movieData = await response.json();
        data.movies = movieData;
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }

    const peopleUrl = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}`;
    try {
        const response = await fetch(peopleUrl);
        const peopleData = await response.json();
        data.people = peopleData;

    } catch (error) {
        console.error("Error fetching people data:", error);
    }

    return data;
};

export const fetchTopMovies = async () => {
    const topMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

    try {
        const response = await fetch(topMoviesUrl);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching top movies:", error);
    }
};

export const fetchPopularMovies = async (page = 1) => {
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    try {
        const response = await fetch(popularMoviesUrl);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
};