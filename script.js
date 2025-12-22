const browseButton = document.getElementById('browse-button');

browseButton.addEventListener('click', () => {
    window.location.href = 'browser.html';
});

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchForm.querySelector('input').value;
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
});