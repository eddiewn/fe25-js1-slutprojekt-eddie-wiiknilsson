const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!searchForm.querySelector('input').value) {
        return;
    }

    const query = searchForm.querySelector('input').value;
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
});