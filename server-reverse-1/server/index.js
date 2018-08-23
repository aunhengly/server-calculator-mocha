const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.post('/api/v1/reversify', (req, res) => {
  const entry = req.body.reversifyThis
    // const entry = 'testing'
    .split('')
    .reverse()
    .join('');
  res.json(entry);
});

app.listen(PORT, console.log(`Server listen to PORT http://localhost:${PORT}`));
