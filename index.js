const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
  const posts = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`,
    body: `This is the body of Post ${index + 1}`,
  }));

  res.json(posts);
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
