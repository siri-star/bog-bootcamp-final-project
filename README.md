# Dev Bootcamp Final Project Fall 2022

## Getting Started

This repository is a template repository. The first thing you should do is create a new repository using this template and give your teammates collaborator access to that new repository.

You will be provided a database URL. Reference `example.env` to see what your `.env` file should look like. Create your own `.env` file and paste in your database URL as a value to the key of `DB_URL`. Keep in mind that this URL should **not** be exposed to GitHub in any of your files. All references to the database URL should occur through `dbUrl` in `utils/consts.js`.

## Visualizing Your Database Collections

If you'd like to use a GUI to visualize documents in your database, download [MongoDB Compass](https://www.mongodb.com/products/compass) and use your provided database URL to connect to your database.

## Troubleshooting Your Database

Should you run into any issues with your database and you want to reset it to its default state with pre-seeded values, run the following command at the root of this repository:

```
npm run seed
```

This command will **delete all existing documents** from your collections and seed your now empty database with some default data.
