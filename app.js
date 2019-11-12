const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Github-Actions!");
});
 
module.exports.app = app;
