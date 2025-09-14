/*
 * Blog API
 *
 * This simple Express server provides a RESTful API for managing blog
 * posts. Posts are stored in memory rather than a database for
 * demonstration purposes. Each post has a numeric ID, title and
 * content. The API supports standard CRUD operations.
 */

const express = require('express');

const app = express();
app.use(express.json());

// In‑memory store for posts
let posts = [];
let nextId = 1;

/**
 * GET /posts
 * Return the list of all posts.
 */
app.get('/posts', (req, res) => {
  res.json(posts);
});

/**
 * POST /posts
 * Create a new post. Expects a JSON body with `title` and `content`.
 */
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const post = { id: nextId++, title, content };
  posts.push(post);
  res.status(201).json(post);
});

/**
 * PUT /posts/:id
 * Update an existing post. Only provided fields will be updated.
 */
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  const { title, content } = req.body;
  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  res.json(post);
});

/**
 * DELETE /posts/:id
 * Delete a post by ID.
 */
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  posts.splice(index, 1);
  res.json({ result: true });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blog API listening at http://localhost:${PORT}`);
});
