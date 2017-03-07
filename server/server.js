var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname,'../app/dist')));

app.listen(PORT,() => {
    console.log(`Server started on ${PORT}`);
})