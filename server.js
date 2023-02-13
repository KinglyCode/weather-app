const express = require("express");
const app = express();
const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const wApi = require('./w-api')

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/api", wApi)

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))


require("./config/database");
 
app.listen(port, function(){
  console.log(`Server is running on port: ${port}`);
});