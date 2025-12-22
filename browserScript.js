import { fetchPopularMovies, fetchTopMovies } from "./api/api.js";

let poplarMoviesPage = 1

async function topMovies(){
    const data = await fetchTopMovies();
    const movies = data.results;
    console.log(movies[0])
    const topMovieContainer = document.getElementById("top-movies-container");
    const topMovies = document.createElement("div");
    topMovies.className = "flex flex-nowrap overflow-x-auto gap-4";
    movies.slice(0,10).forEach(movie => {
        const movieCard = document.createElement("div");

        const cardImage = document.createElement("img");
        cardImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        cardImage.alt = movie.title;
        movieCard.appendChild(cardImage);

        movieCard.className = "movie-card max-w-48 rounded-lg flex-shrink-0";
        const movieTitle = document.createElement("h2");
        movieTitle.className = "movie-title text-white p";
        movieTitle.textContent = movie.title;

        movieCard.append(movieTitle);
        topMovies.appendChild(movieCard);
    });

    topMovieContainer.appendChild(topMovies);
}  

topMovies();

async function popularMovies(page){
    const data = await fetchPopularMovies(page);
    const movies = data.results;

    const popularMovieContainer = document.getElementById("popular-movies-container");
    const popularMovies = document.createElement("div");

    popularMovies.className = "grid grid-cols-5 gap-6";
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card rounded-lg";

        const cardImage = document.createElement("img");
        cardImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        cardImage.alt = movie.title;
        movieCard.appendChild(cardImage);

        const movieTitle = document.createElement("p");
        movieTitle.className = "movie-title text-white text-xs";
        movieTitle.textContent = movie.title;
        movieCard.append(movieTitle);
        popularMovies.appendChild(movieCard);
    });


    popularMovieContainer.appendChild(popularMovies);
}

popularMovies(1);

const loadMoreButton = document.getElementById("load-more-popular");
loadMoreButton.addEventListener("click", () => {
    poplarMoviesPage++;
    popularMovies(poplarMoviesPage);
});

const backButton = document.getElementById('back-to-top');
backButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});