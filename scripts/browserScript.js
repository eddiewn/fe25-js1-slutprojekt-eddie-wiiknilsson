import { fetchPopularMovies, fetchTopMovies } from "../api/api.js";

let poplarMoviesPage = 1

async function topMovies(){
    const data = await fetchTopMovies();
    const movies = data.results;

    
    if(!movies) {
        alert("No data returned from fetchTopMovies");
        return;
    }
    
    console.log(movies[0])
    const topMovieContainer = document.getElementById("top-movies-container");
    const topMovies = document.createElement("div");
    topMovies.className = "flex flex-nowrap overflow-x-auto gap-4";
    movies.slice(0,10).forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card flex-shrink-0 cursor-pointer";

        const cardImage = document.createElement("img");

        cardImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        cardImage.alt = movie.title;

        
        const movieTitle = document.createElement("h2");
        movieTitle.className = "movie-title text-white p";
        movieTitle.textContent = movie.title;

        const movieReleaseDate = document.createElement("p");
        movieReleaseDate.className = "movie-release text-gray-400 text-xs";
        movieReleaseDate.textContent = `${movie.release_date}`;

        movieCard.append(cardImage, movieTitle, movieReleaseDate);

        movieCard.addEventListener("click", () => {
            window.location.href = `movie.html?id=${movie.id}`;
        });

        topMovies.appendChild(movieCard);
    });

    topMovieContainer.appendChild(topMovies);
}  

topMovies();

async function popularMovies(page){
    const data = await fetchPopularMovies(page);
    const movies = data.results;

    if(!movies) {
        alert("No data returned from fetchPopularMovies");
        return;
    }
    const popularMovieContainer = document.getElementById("popular-movies-container");
    const popularMovies = document.createElement("div");

    popularMovies.className = "grid grid-cols-5 gap-6";
    movies.slice(0, 10).forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card cursor-pointer";

        const cardImage = document.createElement("img");
        cardImage.className = "";
        cardImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        cardImage.alt = movie.title;

        const movieTitle = document.createElement("p");
        movieTitle.className = "movie-title text-white text-base";
        movieTitle.textContent = movie.title;

        const movieReleaseDate = document.createElement("p");
        movieReleaseDate.className = "movie-release text-gray-400 text-xs";
        movieReleaseDate.textContent = `${movie.release_date}`;

        movieCard.append(cardImage, movieTitle, movieReleaseDate);

        movieCard.addEventListener("click", () => {
            window.location.href = `movie.html?id=${movie.id}`;
        });
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

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!searchForm.querySelector('input').value) {
        return;
    }

    const query = searchForm.querySelector('input').value;
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
});