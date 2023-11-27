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

#### Click on the image below to reveal the video walk-through of the `installation` process:

[![Screenshot](./assets/images/initial.png)](https://youtu.be/II7sBMICwN8)

#### Click on the image below to reveal the video walk-through of the `category-routes` process:

[![Screenshot](./assets/images/categories.png)](https://www.youtube.com/watch?v=L8QiW-QJldk)

#### Click on the image below to reveal the video walk-through of the `product-routes` process:

[![Screenshot](./assets/images/product.png)](https://www.youtube.com/watch?v=Nw0XJGpwboc)

#### Click on the image below to reveal the video walk-through of the `tags-routes` process:

[![Screenshot](./assets/images/tag.png)](https://www.youtube.com/watch?v=MpVxpb3susg)



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

#### How to use the application:

- First, make sure to install the given application following the previous steps and video walkthrough. 

-  Next, confirm if the tables were created and the database was seeded on MySQL Workbench.
    - Navigate to MySQL Workbench app, click Schemas and the database name `Ecommerce` for the application. 
    - Click the tables, and the following models and requirements will be displayed when the commands are run:
        
        - `SELECT * FROM ecommerce.category`
        - `SELECT * FROM ecommerce.product`
        - `SELECT * FROM ecommerce.product_tag`
        - `SELECT * FROM ecommerce.tag`

- Then, using `Insomnia` or `Postman`, test the application's CRUD commands:
    -  Using the API GET routes for categories, products, or tags, the data for each of these routes will be displayed. 
    - When the user clicks the `GET` request for `ALL` categories, products, or tags, then they are presented with all the data according to each route. 
    - When the user clicks the `GET` request for a `SINGLE` category, product, or tag ID, then they are presented with data for the appropriate ID of each route folder. 
    - When the user tests the `POST`, `PUT`, or `DELETE` API routes for categories, products, or tags, then they are able to `create`, `update`, or `delete` data within each route folder. 


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
