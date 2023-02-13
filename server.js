const express = require("express");
const app = express();
const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')

require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))


require("./config/database");
 
app.listen(port, function(){
  console.log(`Server is running on port: ${port}`);
});