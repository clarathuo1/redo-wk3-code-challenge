# WEEK THREE CODE CHALLENGE REDO

AUTHOR : CLARA THUO

DATE : 22ND JULY 2024

## Flatdango Movie Ticketing Web App
Flatdango is a mini web application that allows users to browse and purchase movie tickets from the Flatiron Movie Theater. This project focuses on fetching movie data from a local JSON server and dynamically updating the UI based on user interactions.

### Project Overview
Flatdango provides the following functionalities to users:

 - Display details of the first movie including its poster, title, runtime, showtime, and available tickets upon page load.
- View a menu of all available movies on the left side of the page.
- Purchase tickets for a movie, with the number of available tickets decreasing visibly on the frontend. Users cannot buy tickets if the showing is sold out (i.e., no available tickets remaining).
- Bonus: Click on a movie in the menu to replace the currently displayed movie's details with the selected movie's details.
- Bonus: Indicate when a movie is sold out by changing the button text to "Sold Out" and adding a sold-out class to the film item in the menu.
### Getting Started
To set up the project locally, follow these steps:

- Clone this repository to your local machine.
- Ensure you have Node.js installed.
- Install dependencies using npm install.
- Start the JSON server by running npm run server.
- Open index.html in your browser to view the application.
#### Project Structure
The project structure is as follows:

- index.html: Main HTML file for the application.
- style.css: CSS file for styling the application.
- script.js: JavaScript file containing the logic for fetching data, updating the UI, and handling user interactions.
- db.json: JSON file serving as the database with movie data.
##### Technologies Used
- HTML
- CSS
- JavaScript (ES6+)
- JSON Server
#### Core Deliverables
- Display Movie Details: Fetch and display details of the first movie including its poster, title, runtime, showtime, and available tickets.
- Movie Menu: Fetch and display a menu of all movies on the left side of the page.
- Buy Tickets: Allow users to purchase tickets for a movie, updating available tickets visually. Prevent ticket purchase if showing is sold out.
#### Bonus Deliverables
- Select Movie: Allow users to click on a movie in the menu to display its details.
- Sold Out Indicator: Change the button text to "Sold Out" and visually indicate sold-out movies in the menu.
#### Contributing
Contributions are welcome! If you'd like to improve this project, submit a pull request or open an issue with your suggestions.

#### License
This project is licensed under the MIT License - see the LICENSE file for details.



