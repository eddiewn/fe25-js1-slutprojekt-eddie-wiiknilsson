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
    movieTitle.className = "movie-title text-white p-4 text-3xl";
    movieTitle.textContent = movie.title;

    const movieGenres = document.createElement("p");
    movieGenres.className = "movie-genres text-gray-400 p-4";
    movieGenres.textContent = `Genres: ${movie.genres.map(genre => genre.name).join(", ")}`;

    const movieLanguage = document.createElement("p");
    movieLanguage.className = "movie-language text-gray-400 p-4";
    movieLanguage.textContent = `Original Language: ${movie.original_language.toUpperCase()}`;

    const movieOverview = document.createElement("p");
    movieOverview.className = "movie-overview text-gray-300 p-4";
    movieOverview.textContent = movie.overview;

    movieCard.append(cardImage, movieTitle, movieGenres, movieLanguage, movieOverview);
    movieContainer.appendChild(movieCard);
}

movieDetails();