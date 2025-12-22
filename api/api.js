const API_KEY = "9e364d18136e5e08c2c0f734f76ad009"; 

export const fetchSearchData = async (query) => {
    let data = {
        movies: null,
        people: null
    };

const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    try {
        const response = await fetch(movieUrl);

        if(!response.ok) throw new Error ("Network response was not ok");

        const movieData = await response.json();
        data.movies = movieData;
    } catch (error) {
        console.error("Error fetching movie data:", error);
        alert("Error fetching movie data");
    }

    const peopleUrl = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}`;
    try {
        const response = await fetch(peopleUrl);
        if(!response.ok) throw new Error ("Getting data failed");

        const peopleData = await response.json();
        data.people = peopleData;

    } catch (error) {
        console.error("Error fetching people data:", error);
        alert("Error fetching people data");
    }

    return data;
};

export const fetchTopMovies = async () => {
    const topMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

    try {
        const response = await fetch(topMoviesUrl);

        if(!response.ok) throw new Error ("Network response was not ok");

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching top movies:", error);
        alert("Error fetching top movies");
    }
};

export const fetchPopularMovies = async (page = 1) => {
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    try {
        const response = await fetch(popularMoviesUrl);
        if(!response.ok) throw new Error ("Network response was not ok");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        alert("Error fetching popular movies");

    }
};

export const fetchMovieDetails = async (movieId) => {
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    try {
        const response = await fetch(movieDetailsUrl);
        if(!response.ok) throw new Error ("Network response was not ok");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        alert("Error fetching movie details");
    }
};

export const fetchPersonDetails = async (personId) => {
    const personDetailsUrl = `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`;
    try {
        const response = await fetch(personDetailsUrl);
        if(!response.ok) throw new Error ("Network response was not ok");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching person details:", error);
        alert("Error fetching person details");
    }
};
