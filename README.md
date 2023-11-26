# Social-App-NoSQL
[![License](https://img.shields.io/badge/License-MIT-turquoise.svg)](https://opensource.org/licenses/MIT)

## Description

This application was developed as a back end for an e-commerce website that uses the latest technologies and allows the user to compete with other e-commerce businesses, with the manager of an online retail company as the target user. This e-commerce application uses object-relational mapping (ORM) and has a modified back end starter code. Additionally, its working Express.js API is configured to use Sequelize as the key component to interact with the MySQL database, which consists of tables for categories, products, tags, and product tags. RESTful API routes point to each standard Create, Read, Update, and Delete (CRUD) operation to make requests on the database.

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

- First, clone the git repository from [GitHub](https://github.com/kwaters3/E-Commerce) 
    - Open the clone file in VS code or in your terminal 
    - Create your` .gitignore` and `.env` files.
    - Check the `dependencies` and `dev-dependencies` that are needed on `package.json`.
- Next, set up all the existing npm packages, run `npm init`.

- Then, install the required dependencies on the `node_modules` folder, run: `npm install`.

- Then, to create your database, go to the terminal and run: `mysql -u root -p`. 
  - Enter mysql password when prompted.
  - Next, enter `source db/schema.sql`. 
  - Then, to seed the database, exit out of mysql cmd line: `exit`, then run: `npm run seed`. 

- To invoke the application, run: `npm start`. The Sequelize models sync to the MySQL database when the server starts. 

- To test the application, use `Insomnia` or `Postman` (view Test section).


## Usage

#### How to use the application:

- First, make sure to install the given application following the previous steps and video walkthrough. 

-  Next, confirm if the tables were created and the database was seeded.on MySQL Workbench.
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
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Credits

- [SQL - W3Schools](https://www.w3schools.com/sql/sql_intro.asp)
- [MySQL - W3Schools](https://www.w3schools.com/mysql/mysql_sql.asp)
- [Sequelize](https://sequelize.org/)

## Tests

- Begin by cloning the Repo from the [GitHub page](https://github.com/kwaters3/E-Commerce), then create a new branch to test the application.
- Run the following `CRUD` commands in Insomnia or Postman. 

    - READ - `GET`
      - localhost:3001/api/categories
      - localhost:3001/api/products
      - localhost:3001/api/tags
    - Can get by `ID` by adding the # after (Example:)
      - localhost:3001/api/categories/3
      
    - CREATE - `POST`
      - use the same http address as above
    - UPDATE - `PUT`
      - use the same http address as above
    - DELETE - `DELETE`
      - use the same http address as above


## License

This project is covered under the following license: <br/>
[![License](https://img.shields.io/badge/License-MIT-turquoise.svg)](https://opensource.org/licenses/MIT)

## Questions

If you have any questions, please email me at: knickler3@gmail.com <br/>
My GitHub page is: [kwaters3](https://github.com/kwaters3)
