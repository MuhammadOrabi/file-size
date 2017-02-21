var express = require('express');
var bodyParser =require('body-parser');
var _ = require('underscore');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/fileSize', upload.single('file'),function (req,res) {
	console.log(req.file.size);
	res.json({size: req.file.size});
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express Started on port ' + PORT);
});	