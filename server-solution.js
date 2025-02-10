const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!'); // Respond immediately
  setTimeout(() => {
    console.log('Asynchronous operation completed');
  }, 5000); // Asynchronous operation can now run in the background
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
