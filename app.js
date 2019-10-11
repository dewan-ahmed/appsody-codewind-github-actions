const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from CodeWind-Appsody-Github-Actions!");
});
 
module.exports.app = app;
