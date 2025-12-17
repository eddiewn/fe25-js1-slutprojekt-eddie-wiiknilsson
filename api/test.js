const API_KEY = "9e364d18136e5e08c2c0f734f76ad009"; 

const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

const fetchMovieData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
};

fetchMovieData();