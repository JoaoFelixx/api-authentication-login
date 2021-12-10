const express = require("express");
const { middleware_cors } = require("./middlewares");
const routes = require("./routes");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(middleware_cors);

app.use('/', routes);


app.listen(PORT, () => console.log('Server on at http://localhost:3000'))