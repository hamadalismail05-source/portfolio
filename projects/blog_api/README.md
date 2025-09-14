<!--
  Blog API README

  This document describes how to set up and run a basic blogging API built
  with Node.js and Express. The service implements a simple in‑memory store
  for blog posts and exposes standard CRUD endpoints. This project
  demonstrates server‑side JavaScript skills including REST API design and
  asynchronous programming.
-->

# Blog API

This project is a small RESTful API for managing blog posts. It is written
in **Node.js** using the **Express** framework. Posts are stored in
memory for simplicity. You can list, create, update and delete
posts through HTTP requests.

## Features

- List all posts
- Create a new post with a title and content
- Update an existing post
- Delete a post

## Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Install the dependencies:

   ```bash
   cd blog_api
   npm install
   ```
3. Start the server:

   ```bash
   node index.js
   ```
4. The API will be available at `http://localhost:3000`. You can use
   `curl`, Postman or any HTTP client to interact with it.

## API Endpoints

| Method | Endpoint      | Description                   |
| ------ | ------------- | ----------------------------- |
| `GET`  | `/posts`      | List all blog posts           |
| `POST` | `/posts`      | Create a new post             |
| `PUT`  | `/posts/:id`  | Update an existing post       |
| `DELETE` | `/posts/:id` | Delete a post                 |

## License

This project is licensed under the MIT License. See the root `LICENSE`
file for details.
