const express = require("express");
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening to port ${port}`));
require('./server/routes.js')(app)
