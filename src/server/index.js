const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
const projectData = {};


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


//API


const application_key = process.env.API_KEY
// check what text was put into the form field
const formText = document.getElementById('name').value

var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'api.meaningcloud.com',
  'path': `/sentiment-2.1?key=${application_key}&lang=auto&txt=${formText}`
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();


/*let options = {
    method: 'POST',
    hostname: 'api.meaningcloud.com',
    path: `/sentiment-2.1?key=${application_key}&lang=auto&txt=${formText}`,
    headers: {
          'Content-Type': 'application/json',
    },
    maxRedirects: 20
};*/

/*app.post('/add', addEntry);

function addEntry(request, response){
    //add entries to projectData object
    projectData['name'] = request.body.name;
    response.send(projectData);
    console.log('Post has been received');
};*/


app.get('/add', function(req,res){
    res.send(options)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
