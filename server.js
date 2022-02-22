const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.get('/api/:timestamp', (req, res) => {
  const { timestamp } = req.params;
});

app.get('/api', (req, res) => {
  const unix = Date.now();
  const utc = new Date(Date.now() * 1000);
  res.status(200).send({ unix, utc });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Api listening port ${PORT}`);
});

module.exports = app;
