const express = require("express");
const { middlewareCors } = require("./middlewares");
const { mysql } = require('./connection')
const { routes } = require("./routes");

const app = express();

mysql.connect(err => !err && console.log('Connection successful'));

app.use(middlewareCors);
app.use(express.json());
app.use(routes);

module.exports = { app }