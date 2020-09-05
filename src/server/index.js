const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: true}))


app.use(express.static('dist'))

console.log(__dirname)


//display UI
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`Example app listening on port 8081!`)
})

//API Call 
var https = require('follow-redirects').https;
var fs = require('fs');

const application_key = process.env.API_KEY;

app.post('/APIresponse', function (proxy_req, proxy_res) {
  var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${application_key}&lang=en&txt=${proxy_req.body.txt}&model=${proxy_req.body.model}`,
    'headers': {
    },
    'maxRedirects': 20
  };
  console.log(proxy_req.body);
  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      proxy_res.json(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
  
});






