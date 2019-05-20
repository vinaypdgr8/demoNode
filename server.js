var express = require('express');
var app = express();

app.get('/hello', function(req, res){
console.log("entered");
res.status(200).json({"message": "entered"});
});

app.listen(3000, function(){
    console.log("listening at 3000!!");
});