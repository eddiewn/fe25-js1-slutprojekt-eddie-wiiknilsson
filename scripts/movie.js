import { fetchMovieDetails } from "../api/api.js";

const params = new URLSearchParams(window.location.search);
const query = params.get("id");

console.log("Search query:", query);

async function movieDetails() {
    const movie = await fetchMovieDetails(query);
    console.log(movie);

    if(!movie) {
        alert("Det gick fel, kom igen senare.");
        return;
    }

    const movieContainer = document.getElementById("movie-details");
    
    const movieCard = document.createElement("div");
    movieCard.className = "movie-detail-card";

    const cardImage = document.createElement("img");
    cardImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    cardImage.alt = movie.title;

    const movieTitle = document.createElement("h1");
    movieTitle.className = "movie-title text-white text-3xl";
    movieTitle.textContent = movie.title;

    const movieScore = document.createElement("h2");
    movieScore.className = "movie-score text-yellow-300 text-xl";
    movieScore.textContent = `Rating: ${movie.vote_average} / 10 ⭐`;
    
    const movieTagLine = document.createElement("h3");
    movieTagLine.className = "movie-tagline text-gray-300 italic";
    movieTagLine.textContent = movie.tagline;

    const movieGenres = document.createElement("p");
    movieGenres.className = "movie-genres text-gray-400 p-2";
    movieGenres.textContent = `Genres: ${movie.genres.map(genre => genre.name).join(", ")}`;

    const movieLanguage = document.createElement("p");
    movieLanguage.className = "movie-language text-gray-400 p-2";
    movieLanguage.textContent = `Original Language: ${movie.original_language.toUpperCase()}`;

    const movieOverview = document.createElement("p");
    movieOverview.className = "movie-overview text-gray-300";
    movieOverview.textContent = movie.overview;

    movieCard.append(cardImage, movieTitle, movieTagLine, movieScore, movieGenres, movieLanguage, movieOverview);
    movieContainer.appendChild(movieCard);
}

movieDetails();