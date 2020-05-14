import express = require('express');
// Create a new express app instance
const app: express.Application = express();
app.use('/', express.static('dist'))

app.listen(3000, function () {
console.log('App is listening on port 3000!');
});