// index.js
const functions = require('@google-cloud/functions-framework');

// Responds to HTTP GET requests.
functions.http('helloWorld', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Responds to HTTP POST requests.
functions.http('createItem', (req, res) => {
  const item = req.body;
  res.status(201).json({ message: 'Item created', item });
});

// Responds to HTTP PUT requests.
functions.http('updateItem', (req, res) => {
  const item = req.body;
  res.status(200).json({ message: 'Item updated', item });
});

// Responds to HTTP DELETE requests.
functions.http('deleteItem', (req, res) => {
  res.status(200).json({ message: 'Item deleted' });
});
