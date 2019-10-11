const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Codewind-Appsody-Github-Actions!");
});
 
module.exports.app = app;
