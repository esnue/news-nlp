const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.use(express.static('dist'))

console.log(__dirname)


//display UI
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

//test API call
app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log(`Example app listening on port 8081!`)
})

//API Call 
var https = require('follow-redirects').https;
var fs = require('fs');

const application_key = process.env.API_KEY;

//use proxy_req to get data object containing user input from client-side formHandler.js through POST route
app.post('/APIresponse', function (proxy_req, proxy_res) {
  let options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${application_key}&lang=auto&url=${proxy_req.body.url}&model=${proxy_req.body.model}`,
    'headers': {
    },
    'maxRedirects': 20
  };
  console.log(proxy_req.body);
  //perform API call
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

//for JEST testing
function sum(x, y) {
  return x + y;
}
export { sum }






