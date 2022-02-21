const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({greeting: 'hello API'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Api listening port ${PORT}`);
});
