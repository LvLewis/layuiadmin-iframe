var express = require('express');
var app = express();

//静态资源在www文件夹下
app.use(express.static('www'));
app.get('/', function (req, res) {
  res.redirect("index.html");
})
var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log("请访问http://127.0.0.1:%s",  port)
})