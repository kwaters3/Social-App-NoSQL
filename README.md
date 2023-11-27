# Social-Network-App
[![License](https://img.shields.io/badge/License-MIT-turquoise.svg)](https://opensource.org/licenses/MIT)

## Description

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friends list. It uses Express for routing, MongoDB database, Mongoose ODM, and Javascript Date object to format a timestamp. The seed data was created using Insomnia. 

## Table of Contents

- [Description](#description)
- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [Tests](#Tests)
- [License](#license)
- [Questions](#questions)

## Visuals

#### Click on the image below to reveal the video walk-through of the `installation & users-route` process:

[![Screenshot](./assets/images/user.gif)](https://youtu.be/-OLtuBdQLv8)

#### Click on the image below to reveal the video walk-through of the `friend-route, thoughts-route, & reaction-route` process:

[![Screenshot](./assets/images/friend.gif)](https://www.youtube.com/watch?v=L8QiW-QJldk)





## Installation

#### How to install the application:

- First, clone the git repository from [GitHub](https://github.com/kwaters3/Social-App-NoSQL) 
    - Open the clone file in VS code or in your terminal 
    - Create your` .gitignore` and `.env` files.
    - Check the `dependencies` and `dev-dependencies` that are needed on `package.json`.
- Next, set up all the existing npm packages, run `npm init`.

- Then, install the required dependencies on the `node_modules` folder, run: `npm install`.

- Then, make sure `MongoDB` is installed on your computer. 

  - To invoke the application, run: `npm start`. The Mongoose models are synched to the MongoDB database when the server starts. 
  - Connect to the MongoDB URI `mongodb://localhost:27017`. Select `social-network-api` to see `thoughts` and `users` data.

- To create seed data and test the API routes, use `Insomnia` or `Postman` (view Test section).


## Usage

#### Utilizing this API enables users to establish a new user profile using a valid username and email. Additionally, users can connect with other individuals, share their own "thoughts," respond with "reactions" to thoughts, update and delete both thoughts and reactions, and remove connections with friends.

- First, make sure to install the given application following the previous steps and video walkthrough. 

-  Next, this app uses MongoDB and a NoSQL database, that allows the website to handle large amounts of data.
    - Navigate to NoSQL app like MongoDB Compass, make sure you are connected to the the URI: `mongodb://localhost:27017` 
    - The `social-network-app` will be available to view and edit

- Then, using `Insomnia` or `Postman`, test the application's CRUD commands:
    -  Using the API GET routes for Users, Friends, or Thoughts, the data for each of these routes will be displayed. 
    - When the user clicks the `GET` request for `ALL` Users or Thoughts, then they are presented with all the data according to each route. 
    - When the user clicks the `GET` request for a `SINGLE` User or Thought id, then they are presented with data for the appropriate ID of each route folder. 
    - When the user tests the `POST`, `PUT`, or `DELETE` API routes for Users, Friends, or Thoughts, then they are able to `create`, `update`, or `delete` data using the corresponding `:_id` within each route folder. 


## Dependencies


- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Credits

- [MongoDB](https://www.mongodb.com/docs/manual/)
- [MongoDB - W3Schools](https://www.w3schools.com/mongodb/)

## Tests

- Begin by cloning the Repo from the [GitHub page](https://github.com/kwaters3/Social-App-NoSQL), then create a new branch to test the application.
- Run the following `CRUD` commands in Insomnia or Postman for each category: 

    - `USER`
      - Get all users: `GET /api/users`
      - Create a user: `POST /api/users`
      - Get user by ID: `GET /api/users/:userId`
      - Update a user: `PUT /api/users/:userId`
      - Delete a user: `DELETE /api/users/:userId`
      - Add a friend: `PUT /api/users/:userId/friends/:friendId`
      - Delete a friend: `DELETE /api/users/:userId/friends/:friendId`
      
    - `THOUGHT`
      - Get all thoughts: `GET /api/thoughts`
      - Create a thought: `POST /api/thoughts`
      - Get thought by ID: `GET /api/thoughts/:thoughtId`
      - Update a thought: `PUT /api/thoughts/:thoughtId`
      - Delete a thought: `DELETE /api/thoughts/:thoughtId`


## License

This project is covered under the following license: <br/>
[![License](https://img.shields.io/badge/License-MIT-turquoise.svg)](https://opensource.org/licenses/MIT)

## Questions

If you have any questions, please email me at: knickler3@gmail.com <br/>
My GitHub page is: [kwaters3](https://github.com/kwaters3)
