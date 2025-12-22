import {fetchSearchData} from "../api/api.js";

const params = new URLSearchParams(window.location.search);
const query = params.get("query");

console.log("Search query:", query);

async function displaySearchResults(query) {
    const data = await fetchSearchData(query);

    if (!data.movies && !data.people) {
        alert("No data returned from fetchSearchData");
        return;
    }
    const movies = data.movies.results;

    const people = data.people.results;

    console.log(data);
    const movieContainer = document.getElementById("movie-container");
    if (movies.length === 0) {
        movieContainer.textContent = "No results found.";
    } else {
        const movieSearchResults = document.createElement("div");
        movieSearchResults.className = "grid grid-cols-5 gap-6";
        movies.forEach((movie) => {
            if (!movie.poster_path) return;

            const movieCard = document.createElement("div");
            movieCard.className = "movie-card cursor-pointer max-w-48";

            //Lätt att få en överblick av koden (No detective work )
            //Lätt att förstå vad som händer variabel namn funktionnamn osv (No detective work )
            //Lätt att utöka koden utan att behöva göra om funktioner osv

            const cardImage = document.createElement("img");
            cardImage.className = "max-h-128";
            cardImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            cardImage.alt = movie.title;

            const movieTitle = document.createElement("p");
            movieTitle.className = "movie-title text-white text-xs";
            movieTitle.textContent = movie.title;

            const movieReleaseDate = document.createElement("p");
            movieReleaseDate.className = "movie-release text-gray-400 text-xs";
            movieReleaseDate.textContent = `${movie.release_date}`;

            movieCard.append(cardImage, movieTitle, movieReleaseDate);
            movieCard.addEventListener("click", () => {
                window.location.href = `movie.html?id=${movie.id}`;
            });
            movieSearchResults.appendChild(movieCard);
        });
        movieContainer.appendChild(movieSearchResults);
    }
    const peopleContainer = document.getElementById("people-container");
    console.log(people[0]);

    if (people.length === 0) {
        peopleContainer.textContent = "No people found.";
        return;
    }

    const peopleSearchResults = document.createElement("div");
    peopleSearchResults.className = "grid grid-cols-5 gap-6";
    people.forEach((person) => {
        if (!person.profile_path) return;

        const personCard = document.createElement("div");
        personCard.className = "person-card cursor-pointer max-w-48";

        const cardImage = document.createElement("img");
        cardImage.src = `https://image.tmdb.org/t/p/w500${person.profile_path}`;
        cardImage.alt = person.name;
        
        const personName = document.createElement("p");
        personName.className = "person-name text-white text-xs";
        personName.textContent = person.name;

        const known_for = document.createElement("ul");

        person.known_for.slice(0,3).forEach(show => {
            const known_for_item = document.createElement("li");
            known_for_item.className = "text-gray-400 text-xs";
            known_for_item.textContent = `Known for ${show.media_type} : ${show.name || show.title} `;
            known_for.appendChild(known_for_item); 
        });

        personCard.append(cardImage, personName, known_for);
        personCard.addEventListener("click", () => {
            window.location.href = `person.html?id=${person.id}`;
        });
        peopleSearchResults.appendChild(personCard);
    });
    peopleContainer.appendChild(peopleSearchResults);
}

displaySearchResults(query);
