const mysql = require("mysql")
const dbConfig = require("../config/db.config.js")

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    DB: dbConfig.DB
})

connection.connect( error =>{
    if (error) throw error;
    console.log("Conexion exitosa");
})

module.exports = connection