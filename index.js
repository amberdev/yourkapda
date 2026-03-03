// Create a small Express server that responds with "hello world" on the root URL
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
