var express = require('express');
var wechat = require('wechat');

var app = express();
var config = {
  token: 'test',
  appid: 'wx182be24c64f087d4',
  encodingAESKEY: ''
};

app.use(express.query());
app.use('/wechat', wechat(config, function(req, res, next) {
  var message = req.weixin;
  console.log(message);
}));

app.listen(80);


