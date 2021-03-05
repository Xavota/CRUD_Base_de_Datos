const express = require("express");
const bodyParser = require("body-parser");
const morgan= require("morgan");
const path = require("path");
const myConnection = require('express-myconnection');
const mysql= require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Routes
//post: Insertar. Nota: Algunos lo utilizan también para actualizar
//get: Obtener visualizar
//put: Para acualizar. Nota: Casi nadie lo usa 
//delete: Para borrar
//require("./routes/alumno.routes.js")(app);
//app.get("/",(req,res)=>{
//    res.json({message:"Hello world"});
//})

const alumnoRoutes = require('./routes/alumno.js');
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password:'password',
    port: 3306,
    database: 'mydb'
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use('/', alumnoRoutes);
app.use(express.static(path.join(__dirname,'public')));



app.listen(3000,()=>{
    console.log("Server is runninng on port 3000");
})