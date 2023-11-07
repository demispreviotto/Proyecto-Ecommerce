# E-commerce Backend Project

## Introduction
In this backend project, we will combine knowledge of Node.js, Express, MySQL, and Sequelize to create a RESTful API. You will be required to present and defend a diagram that explains the relationships between tables. The project involves building an e-commerce online store.

## Description
RESTful API that can perform the following tasks:

- User registration using Bcrypt.
- User login with token authentication and middleware.
- Implement a CRUD (Create, Read, Update, Delete) functionality.
- Create One-to-One, One-to-Many and Many-to-Many relationship.
- Utilize seeders for initial data population.
- MVC

## Technologies
MySQL || Sequelize || Node || Express || Postman

### Endpoints
**Products**
- CRUD operations for products.
- Create a product endpoint.
- Update a product endpoint.
- Delete a product endpoint.
- The endpoint to fetch products should display their associated categories.
- An endpoint to retrieve a product by its ID.
- Filters to search for products by name or price.
- A filter to sort products from highest to lowest price.
- Implement validation for creating a product to ensure all fields are filled. Return a message if not.
- Only authenticated users can create, update, and delete products.

**Categories**
- CRUD operations for categories.
- Create a category endpoint.
- Update a category endpoint.
- Delete a category endpoint.
- An endpoint to view all categories along with the products they contain.
- Create an endpoint to fetch a category by its ID.
- A filter to search for categories by name.

**Orders**
- CRUD operations for orders.
- Create an endpoint to view orders along with the products they contain.
- Create an endpoint to place orders.

**Users**
- CRUD operations for users.
- Endpoint for user registration using Bcrypt.
- Endpoint for user login (using Bcrypt and JWT).
- An endpoint to retrieve information for the currently logged-in user, including their orders and the products in each order.
- An endpoint for user logout.
- Implement validation when creating a user to ensure all fields are filled. Return a message if not.

**Seeders**
- Create seed data for products, users, categories and reviews.

**Middleware**
implements middleware functions to enhance security and error handling with authentication, isAdmin, and isSuperAdmin ensuring secure user access control and error handling with handleValidationError and typeError managing validation and type errors for a seamless user experience.

### Extras
**Role Implementation**
- Create an Admin role, and only users with this role can create, update, and delete products.

**Reviews**
- Implement CRUD operations for reviews.
- The endpoint to fetch reviews should display them along with the user who wrote the review.
- Update the endpoint to fetch all products to also display products along with their categories and reviews.
- Update the endpoint to fetch a product by ID to also display products along with their categories and reviews.

## Conclusion
This project will help you build a robust e-commerce backend system that incorporates authentication, relationships between entities, and additional features like user roles and product reviews. It provides valuable experience in using Node.js, Express, and Sequelize for creating a functional and feature-rich API.

![Screenshot 2023-11-07 152127](https://github.com/demispreviotto/Proyecto-Ecommerce/assets/99538600/2e2b5415-0fe4-43fd-9304-10598161ed37)
![Screenshot 2023-11-07 152017](https://github.com/demispreviotto/Proyecto-Ecommerce/assets/99538600/a4398174-d218-4d87-8e08-57792381d1c6)
![Screenshot 2023-11-07 151933](https://github.com/demispreviotto/Proyecto-Ecommerce/assets/99538600/d28c6d54-97c0-4a50-b514-68b3ec61c7a9)

