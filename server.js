const app = require('./app.js');

const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
  console.log('Express listening on port: ' + port);
});