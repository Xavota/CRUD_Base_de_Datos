module.exports = app => {
    const alumnos = require("../controllers/alumno.controller.js");
    app.get("/alumnos",alumnos.findAll)
}