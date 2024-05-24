const functions = require('@google-cloud/functions-framework');

functions.http('helloWorld', (req, res) => {
  res.status(200).send('Hello, World!');
});

functions.http('createItem', (req, res) => {
  const item = req.body;
  res.status(201).json({ message: 'Item created', item });
});

functions.http('updateItem', (req, res) => {
  const item = req.body;
  res.status(200).json({ message: 'Item updated', item });
});

functions.http('deleteItem', (req, res) => {
  res.status(200).json({ message: 'Item deleted' });
});
