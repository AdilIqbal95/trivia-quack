# Trivia Duck <img src="https://i.imgur.com/kKh40uK.png" width="100" height="100"> 
## Shoot yourself into space ...

https://trivia-duck.netlify.app/

## Client

Dear User,

We welcome you to our quizz game based on Open Trivia DB API. We hope it helps you to unwind and have couple of laughs along the way. We even hope it will spark a little bit of nostalgic feeling for you and your family and will encourage you to get together and spend your evening in a good company! Without further ado, fasten your belts: Ready! Steady! Take off! :rocket:

## Aim 
Create multiplayer quizz web app with a space theme design that would allow users to simultaneously answer questions, choose No. of questions for each game and level of difficulty as well as topic of the quiz. Storage of high scores is also to be included. 

## Installation and usage of the website

### Using Netlify deploy link
[Trivia Duck](https://trivia-quack.netlify.app/)

### Downloading and running locally for open source development
1. Clone the repository into a folder on your local machine
2. cd into clien and api and run installation command `npm install` in each one to install all required dependencies
3. cd into the newly created folder and open code editor of your choice
- Client and server will have to be started separately in the following way:
4. cd into client and run `npm run dev` command
5. cd.. out of client and run `bash _scripts/startDev.sh` command (for other shells replace bash as appropriate)
6. Browser tab should open automatically in your default browser. If page does not render on successful compilation of the client, open it by typing `localhost:8080`.

## Technologies

1. React
2. Redux
3. MongoDB
4. SocketIO
5. Docker Compose
6. Bootstrap front-end framework
7. Express back-end framework
8. SASS/SCSS for styling
9. Axios API for data fetching

## Design Processes

Main stages of the process were:
1. Initial brainstorming:
- whole group collaborated on creating initial PhotoShop mockups of the game;
- came up with initial name ideas;
- chose main theme for the game and icon
- thought out our intended audience to tailor design decisions
2. Implementation of initial design layout and creating routed pages in React.
3. Creating corresponding components for each page.
4. Refining each design page to unify the style of the app. 
5. Adding extra style features like animations and theme transitions

- Design has been greatly enhanced by following React-Redux philosophy. Authors of the app attempted to stay true to the philosophy of these tools and tailored our code to reflect this.

## Teamwork Approaches

1. Agile team working approach 
- Tickets were created as part of a team effort using GitHub Kanban board after initial design specifications were set. 
- Team members would take on whatever tickets they felt capable of and interested in tackling.
- Communication was crucial through central channel on Slack to ensure no duplicate or conflicting work was created. 
- Project was broken down into self-contained short sprints to deliver project on time and mitigate any rolling risks. 

Basic initial design (game page)

![image](https://i.imgur.com/PHJcEi8.png)

<img src="https://i.imgur.com/VZTHhit.png" width="300"> <img src="https://i.imgur.com/84u2eS9.png" width="300"> 

## Wins and Challenges

### Wins
1. Successfully integrated Open Trivia DB API for quiz game part.
2. Animations made styling much more interesting and engaging.
3. Managed to create a consistent brand for the product that is visually appealing.
4. Successfully implemented Socket.io to allow multiplayer user game. 
5. Implemented Redux flow to manage state globally and stay on top of product complexity.

### Challenges
1. Testing many components and layers of the application.
2. Code hygiene and efficiency
3. 
