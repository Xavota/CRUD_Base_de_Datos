const sql = require("./db.js")

const Alumno = function(alumno){
    this.id_Alumno = alumno.id_Alumno;
    this.nombre = alumno.nombre;
    this.colegiatura = alumno.colegiatura;
    this.Estudio_Musica_id_estudio = alumno.Estudio_Musica_id_estudio;
}

Alumno.getAll = result =>{
    sql.query("SELECT * from mydb.alumno", (err,res)=>{
        if (err){
            console.log(`error: ${err}`);
            result(null,err);
            return;
        }
        console.log("Alumnos:" + res);
        result(null,res);
    });
}

module.exports = Alumno