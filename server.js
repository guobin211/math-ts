const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const muter = require('multer'); // v1.0.5
const upload = muter();  // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

const data = [
  {name: 'jack', age: 22, sex: 'man'},
  {name: 'jack', age: 22, sex: 'man'},
  {name: 'jack', age: 22, sex: 'man'},
  {name: 'jack', age: 22, sex: 'man'}
];

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header().set('Content-Type', 'application/json; charset=utf-8');
  next();
};
app.use(allowCrossDomain);

app.get('/', function (req, res) {
  res.send('hello world');
});
app.get('/api/', (req, res) => {
  res.json(data);
});
app.get('/api/*', (req, res) => {
  res.json(data);
});
app.post('/api/', upload.array(), (req, res) => {
  // 通过请求头来验证合法性
  const head = req.headers;
  // 遍历请求头的信息
  for (let prop in head) {
    if (head.hasOwnProperty(prop)) {
      console.log(prop);
      console.log(head[prop]);
    }
  }
  // 返回请求体的信息
  const data = {
    contentType: head['content-type'],
    authorization: head['authorization'],
    body: req.body
  };
  // 设置域名cookie
  res.cookie('user', 'admin', {domain: 'http://www.guobin211.com', path: '/', maxAge: 900000, secure: true});
  res.send(data);
});
app.post('/api/*', upload.array(), (req, res) => {
  // 通过请求头来验证合法性
  const head = req.headers;
  // 遍历请求头的信息
  for (let prop in head) {
    if (head.hasOwnProperty(prop)) {
      // console.log(prop);
      console.log(head[prop]);
    }
  }
  // 返回请求体的信息
  const data = {
    contentType: head['content-type'],
    authorization: head['authorization'],
    body: req.body
  };
  // 设置域名cookie
  res.cookie('user', 'admin', {domain: 'http://www.guobin211.com', path: '/', maxAge: 900000, secure: true});
  res.send(data);
});
app.listen(3000, (err, req, res, next) => {
  if (err) {
    console.log(err);
  }
  console.log('http://localhost:3000')
});
