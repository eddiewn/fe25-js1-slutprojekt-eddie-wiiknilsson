import { fetchTopMovies } from "./api/api.js";

async function topMovies(){
    const data = await fetchTopMovies();
    const movies = data.results;

    const topMovieContainer = document.getElementById("top-movies-container");
    const topMovies = document.createElement("div");
    topMovies.className = "flex flex-nowrap overflow-x-auto gap-4";
    movies.slice(0,10).forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card max-w-[300px] min-w-[300px] bg-[#151515] rounded-lg p-4 flex-shrink-0";
        const movieTitle = document.createElement("h2");
        movieTitle.className = "movie-title text-white p";
        movieTitle.textContent = movie.title;

        movieCard.append(movieTitle);
        topMovies.appendChild(movieCard);
    });

    topMovieContainer.appendChild(topMovies);
}  

topMovies();