const mongoose = require('mongoose');

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost/weather-app", {});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});