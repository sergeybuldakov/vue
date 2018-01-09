var express = require('express'),
    app = new express();

app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.use('/js', express.static('node_modules'));

app.listen('8080');