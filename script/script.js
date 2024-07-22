
const apiUrl = 'http://localhost:3000/films';

//Event listener to fetch films when the DOM Content is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchFilms();
});

//Function to fetch films from the API
function fetchFilms() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(films => {
      const filmList = document.getElementById('films-list');
      filmList.innerHTML = '';
      films.forEach(film => {
        const filmItem = createFilmItem(film);
        filmList.appendChild(filmItem);
      });
    })
    .catch(error => {
      console.error('Error fetching films:', error);
    });
}

//Function to display films in the UI
function createFilmItem(film) {
  const filmItem = document.createElement('li');
  filmItem.className = 'film item';
  filmItem.innerHTML = `
    <h2>${film.title}</h2>
    <img src="${film.poster}" alt="${film.title}">
    <p>Runtime: ${film.runtime} minutes</p>
    <p>Showtime: ${film.showtime}</p>
    <p>Available tickets: <span class="available-tickets">${film.capacity - film.tickets_sold}</span></p>
    <button class="buy-ticket-button" data-id="${film.id}">Buy Ticket</button>
    <button class="delete-button" data-id="${film.id}">Delete</button>
    <div class="movie-details"></div>
  `;

  filmItem.querySelector('.buy-ticket-button').addEventListener('click', () => {
    buyTicket(film.id, filmItem);
  });

  filmItem.querySelector('.delete-button').addEventListener('click', () => {
    deleteFilm(film.id, filmItem);
  });

  return filmItem;
}

//Function to handle buying a ticket
function buyTicket(id, filmItem) {
  const buyTicketUrl = `${apiUrl}/${id}`;

  fetch(buyTicketUrl)
    .then(response => response.json())
    .then(film => {
      const ticketsSold = film.tickets_sold + 1;
      const availableTickets = film.capacity - ticketsSold;

      if (availableTickets >= 0) {
        fetch(buyTicketUrl, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ tickets_sold: ticketsSold })
        })
          .then(response => response.json())
          .then(updatedFilm => {
            const availableTicketsElement = filmItem.querySelector('.available-tickets');
            if (availableTicketsElement) {
              availableTicketsElement.textContent = updatedFilm.capacity - updatedFilm.tickets_sold;
              if (updatedFilm.capacity - updatedFilm.tickets_sold === 0) {
                availableTicketsElement.textContent = 'Sold Out';
              }
            } else {
              console.error('Available tickets element not found.');
            }
          })
          .catch(error => {
            console.error('Error buying ticket:', error);
          });
      } else {
        console.error('Not enough tickets available.');
      }
    })
    .catch(error => {
      console.error('Error fetching film:', error);
    });
}

//Function to handle deleting a film
function deleteFilm(id, filmItem) {
  const deleteFilmUrl = `${apiUrl}/${id}`;

  fetch(deleteFilmUrl, {
    method: 'DELETE',
  })
    .then(() => {
      filmItem.remove();
    })
    .catch(error => {
      console.error('Error deleting film:', error);
    });
}