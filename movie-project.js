// https://www.omdbapi.com/?s=thor&page=&apikey=4053be5e
// https://www.omdbapi.com/?i=tt3896198&apikey=4053be5e
const movieList = document.querySelector(".movie-list")
const movieSearchBox = document.getElementById("movie-search-box")
const searchResultsList = document.getElementById("search-results-list");
const filterSelect = document.getElementById("year-filter")

async function main(searchTerm, sortOrder = 'latest') {
    const movieURL = `https://www.omdbapi.com/?s=${searchTerm}&page=&apikey=4053be5e`
    const movieResponse = await fetch(`${movieURL}`)
    const moviesData = await movieResponse.json()
    
    if (!moviesData.Search) {
        movieList.innerHTML = '<p>No results found</p>';
        return;
    }

    let sortedMovies = [...moviesData.Search];  // Create a copy of the array
    
    if (sortOrder === 'latest') {
        sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sortOrder === 'oldest') {
        sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    movieList.innerHTML = sortedMovies.map(movies => displayMovie(movies)).join("")

}

function displayMovie(movies) {
    searchResultsList.innerHTML = `<h2 class="search__title">Search Results: for "${movieSearchBox.value}"</h2>`
    return `
        <div class="movie">
          <div class="movie-card">
              <img src="${movies.Poster}" alt="">
              <h3 class="movie-title">${movies.Title}</h3>
              <div class="movie-description">
                  <p class="movie-year">${movies.Year}</p>
                  <p class="movie-series">${movies.Type}</p>
              </div>
          </div>
      </div>`
    
    
}

function findMovies() {
    let searchTerm = movieSearchBox.value.trim();
    const currentSort = filterSelect.value
    if (searchTerm.length > 0) {
        movieList.classList.remove("hide-movie-list")
        main(searchTerm, currentSort)
    }
    else {
        movieList.classList.add("hide-movie-list")
    }
}
