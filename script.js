// Initial movie data
let movieDatabase = [
    { title: "The Shawshank Redemption", year: 1994, director: "Frank Darabont" },
    { title: "The Dark Knight", year: 2008, director: "Christopher Nolan" },
    { title: "Inception", year: 2010, director: "Christopher Nolan" },
    { title: "The Matrix", year: 1999, director: "Lana Wachowski, Lilly Wachowski" },
    { title: "The Godfather", year: 1972, director: "Francis Ford Coppola" }
];

let toDoList = [];

// Form submission handler
function submitForm(event) {
    event.preventDefault();  // Prevent page reload
    document.getElementById('homePage').style.display = 'none';  // Hide the initial form and cover page
    document.getElementById('contentSection').style.display = 'block';  // Show to-do list and movie database
    displayMovieDatabase();
}

// Add movie to to-do list
function addMovieToList() {
    const movieInput = document.getElementById('movieToAdd');
    if (movieInput.value.trim() !== "") {
        toDoList.push(movieInput.value.trim());
        movieInput.value = "";  // Clear input field
        displayToDoList();
    }
}

// Display to-do list
function displayToDoList() {
    const toDoListContainer = document.getElementById('toDoList');
    toDoListContainer.innerHTML = "";  // Clear existing list
    toDoList.forEach((movie, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" onclick="toggleDone(${index})"> ${movie}`;
        toDoListContainer.appendChild(li);
    });
}

// Toggle the "done" state of a movie in the to-do list
function toggleDone(index) {
    const listItem = document.getElementById('toDoList').children[index];
    listItem.style.textDecoration = listItem.querySelector('input').checked ? 'line-through' : 'none';
}

// Add movie to the database
function addMovieToDatabase() {
    const title = document.getElementById('movieTitle').value.trim();
    const year = parseInt(document.getElementById('movieYear').value.trim());
    const director = document.getElementById('movieDirector').value.trim();

    if (title && year && director) {
        movieDatabase.push({ title, year, director });
        document.getElementById('movieTitle').value = "";
        document.getElementById('movieYear').value = "";
        document.getElementById('movieDirector').value = "";
        displayMovieDatabase();
    } else {
        alert("Please fill out all fields.");
    }
}

// Display movie database
function displayMovieDatabase() {
    const movieTableBody = document.getElementById('movieTableBody');
    movieTableBody.innerHTML = "";  // Clear existing table
    movieDatabase.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${movie.title}</td><td>${movie.year}</td><td>${movie.director}</td>`;
        movieTableBody.appendChild(row);
    });
}

// Search movies in the database
function searchMovies() {
    const searchQuery = document.getElementById('movieSearch').value.toLowerCase();
    const filteredMovies = movieDatabase.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery) || 
        movie.director.toLowerCase().includes(searchQuery)
    );
    const movieTableBody = document.getElementById('movieTableBody');
    movieTableBody.innerHTML = "";  // Clear existing table content
    filteredMovies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${movie.title}</td><td>${movie.year}</td><td>${movie.director}</td>`;
        movieTableBody.appendChild(row);
    });
}

// Home button functionality (reset page to initial state)
function goHome() {
    document.getElementById('homePage').style.display = 'flex';  // Show the initial home page with cover and form
    document.getElementById('contentSection').style.display = 'none';  // Hide to-do list and movie database
}
