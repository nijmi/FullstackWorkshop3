const movieListDiv = document.getElementById('movie-list');
const searchInput = document.getElementById('search-input');
const form = document.getElementById('add-movie-form');
let allMovies = [];

// Initialize movies from localStorage or movies.json
function initializeMovies() {
  const storedMovies = localStorage.getItem('movies');
  if (storedMovies) {
    allMovies = JSON.parse(storedMovies);
  } else {
    // Load from movies.json if localStorage is empty
    fetch('movies.json')
      .then(response => response.json())
      .then(data => {
        allMovies = data.movies || [];
        saveMovies();
        renderMovies(allMovies);
      })
      .catch(error => {
        console.error('Error loading movies.json:', error);
        allMovies = [];
        renderMovies(allMovies);
      });
    return;
  }
  renderMovies(allMovies);
}

// Save movies to localStorage
function saveMovies() {
  localStorage.setItem('movies', JSON.stringify(allMovies));
}

function renderMovies(moviesToDisplay) {
  movieListDiv.innerHTML = '';
  if (moviesToDisplay.length === 0) {
    movieListDiv.innerHTML = '<p>No movies found matching your criteria.</p>';
    return;
  }
  moviesToDisplay.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-item');
    // Escape quotes in movie data to prevent HTML injection
    const safeTitle = movie.title.replace(/'/g, "\\'");
    const safeGenre = movie.genre.replace(/'/g, "\\'");
    movieElement.innerHTML = `
      <p><strong>${movie.title}</strong> (${movie.year}) - ${movie.genre}</p>
      <button class="edit-btn" onclick="editMoviePrompt(${movie.id}, '${safeTitle}', ${movie.year}, '${safeGenre}')">Edit</button>
      <button class="delete-btn" onclick="deleteMovie(${movie.id})">Delete</button>
    `;
    movieListDiv.appendChild(movieElement);
  });
}

// Apply search filter and render movies
function applySearchFilter() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm === '') {
    renderMovies(allMovies);
  } else {
    const filteredMovies = allMovies.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(searchTerm);
      const genreMatch = movie.genre.toLowerCase().includes(searchTerm);
      return titleMatch || genreMatch;
    });
    renderMovies(filteredMovies);
  }
}

function fetchMovies() {
  initializeMovies();
}

// Initialize on page load
fetchMovies();

searchInput.addEventListener('input', function () {
  applySearchFilter();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const genreInput = document.getElementById('genre');
  const yearInput = document.getElementById('year');
  
  const newMovie = {
    id: allMovies.length > 0 ? Math.max(...allMovies.map(m => m.id)) + 1 : 1,
    title: titleInput.value.trim(),
    genre: genreInput.value.trim(),
    year: parseInt(yearInput.value)
  };

  if (!newMovie.title || !newMovie.year) {
    alert('Please fill in all required fields (Title and Year)');
    return;
  }

  allMovies.push(newMovie);
  saveMovies();
  // Apply current search filter (if any) after adding new movie
  applySearchFilter();
  form.reset();
});

function editMoviePrompt(id, currentTitle, currentYear, currentGenre) {
  const newTitle = prompt('Enter new Title:', currentTitle);
  if (newTitle === null) return; // User cancelled
  
  const newYearStr = prompt('Enter new Year:', currentYear);
  if (newYearStr === null) return; // User cancelled
  
  const newGenre = prompt('Enter new Genre:', currentGenre);
  if (newGenre === null) return; // User cancelled

  if (newTitle && newYearStr && newGenre) {
    const updatedMovie = {
      id: id,
      title: newTitle.trim(),
      year: parseInt(newYearStr),
      genre: newGenre.trim()
    };
    updateMovie(id, updatedMovie);
  }
}

function updateMovie(movieId, updatedMovieData) {
  const index = allMovies.findIndex(movie => movie.id === movieId);
  if (index !== -1) {
    allMovies[index] = updatedMovieData;
    saveMovies();
    // Apply current search filter (if any) after updating movie
    applySearchFilter();
  }
}

function deleteMovie(movieId) {
  if (confirm('Are you sure you want to delete this movie?')) {
    allMovies = allMovies.filter(movie => movie.id !== movieId);
    saveMovies();
    // Apply current search filter (if any) after deleting movie
    applySearchFilter();
  }
}
