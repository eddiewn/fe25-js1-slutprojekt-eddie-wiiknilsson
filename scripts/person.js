import { fetchPersonDetails } from '../api/api.js';

const params = new URLSearchParams(window.location.search);
const personId = params.get('id');

async function displayPersonDetails() {
    const person = await fetchPersonDetails(personId);
    console.log(person);

        if(!person) {
        alert("No data returned from fetchPersonDetails");
        return;
    }
    
    const personContainer = document.getElementById('person-details');

    const personCard = document.createElement('div');
    personCard.className = 'person-detail-card';

    const profileImage = document.createElement('img');
    profileImage.src = `https://image.tmdb.org/t/p/w500${person.profile_path}`;
    profileImage.alt = person.name;

    const personName = document.createElement('h1');
    personName.className = 'person-name text-white p-4 text-3xl';
    personName.textContent = person.name;

    const personBiography = document.createElement('p');
    personBiography.className = 'person-biography text-gray-300 p-4';
    personBiography.textContent = person.biography || 'Biography not available.';

    const personKnownFor = document.createElement('p');
    personKnownFor.className = 'text-white p-4 text-2xl';
    personKnownFor.textContent = `Person is known for: ${person.known_for_department}`;

    personCard.append(profileImage, personName, personBiography, personKnownFor);
    personContainer.appendChild(personCard);
}

displayPersonDetails();