## Welcome to Footy Addicts

In this repository we encapsulated the code for the Romanian Footy Addicts platform. 
The website is a platform for football enthusiasts to find and join football games or book football pitches in their local area.


## Project structure

We have a monorepo structure, with the following folders:

 - app.backend - the RESTfull CRUD API of the application
 - app.frontend - the frontend of the application (React)

On the storage side, we have a MongoDB database, which is used by the backend to store the data.

## app.backend

The backend is a Node.js application, using Express.js as a web framework. The database is MongoDB, and we use Mongoose as an ODM.

The backend is structured in the following way:

 - `models` - the Mongoose models
 - `routes` - the Express.js routes
 - `services` - the business logic of the application
 - `utils` - utility functions

### Running the backend

To run the backend, you need to have Node.js and MongoDB installed on your machine.
Create a `.env` file in the `app.backend` folder, with the following content:

```bash
MONGODB_URI=<db-connection-string>
PORT=<port-for--api>
```

Replace `<db-connection-string>` with the connection string of your MongoDB database, and `<port-for-api>` with the port you want the API to run on.

Then, run the following commands:

```bash
$ cd app.backend
$ npm install
$ npm serve
```

## app.frontend
