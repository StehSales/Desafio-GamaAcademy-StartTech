const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const port = 3333;
const cors = require('cors');
const connect = require('connect')
const serveStatic = require('serve-static');
connect().use(serveStatic);
require("dotenv").config();


mongoose.connect('mongodb+srv://stehsales:YCPP9SUScwiJ8FB@cluster0.jhatf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/',  (req, res) => {
    res.sendFile(__dirname + "/index.html");
   
});


app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/script.js", express.static(__dirname + '/script.js'));

app.use(express.json());
app.use(cors()); 
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(port, () => {
    console.log(`Backend Started at http://localhost:${port}`);
});