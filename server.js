const express = require('express');
const app = express();

app.engine('abell', require('abell-renderer').engine({allowRequire: true}));
app.set('views', './views'); // specify the views directory
app.set('view engine', 'abell'); // register the template engine

app.get('/', function (req, res) {
  res.render('index', { foo: 'I am coming from server.js' })
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
});