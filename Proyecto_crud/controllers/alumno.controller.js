const controller={}

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('Select * from alumno' , (err,alumno) => {
            if(err){
                res.json(err);
            }
            console.log(alumno);
            res.render('index.view.ejs',{
                data: alumno
            });
        
        });
    });
};



controller.list_alumnos=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('Select * from alumno' , (err,alumno) => {
            if(err){
                res.json(err);
            }
            console.log(alumno);
            res.render('alumnos.view.ejs',{
                data: alumno
            });
        
        });
     });
};

controller.save_alumno = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO alumno set ?', [data], (err, alumno) => {
          console.log(alumno)
          res.redirect('/alumno');
  
        })
    })
};

controller.delete_alumno = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM alumno WHERE id_Alumno = ?', [id], (err, rows) => {
            res.redirect('/alumno');
        });
    });
}

controller.update_alumno = (req, res) => {
    const { id } = req.params;
    const newAlumno = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE alumno set ? where id_Alumno = ?', [newAlumno, id], (err, rows) => {
            res.redirect('/alumno');
        });
    });
};

controller.edit_alumno = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM alumno WHERE id_Alumno = ?", [id], (err, rows) => {
            res.render('alumnos.edit.ejs', {
                data: rows[0]
            })
        });
    });
};


  

controller.list_estudios=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('Select * from estudio_de_música' , (err,estudio) => {
            if(err){
                res.json(err);
            }
            console.log(estudio);
            res.render('estudio.view.ejs',{
                data: estudio
            });
        
        });
     });
};

controller.save_estudio = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO estudio_de_música set ?', [data], (err, estudio) => {
          console.log(estudio)
          res.redirect('/estudio_musica');
  
        })
    })
};

controller.delete_estudio = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM estudio_de_música WHERE id_estudio = ?', [id], (err, rows) => {
            res.redirect('/estudio_musica');
        });
    });
}

controller.update_estudio = (req, res) => {
    const { id } = req.params;
    const newEstudio = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE estudio_de_música set ? where id_estudio = ?', [newEstudio, id], (err, rows) => {
            res.redirect('/estudio_musica');
        });
    });
};

controller.edit_estudio = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM estudio_de_música WHERE id_estudio = ?", [id], (err, rows) => {
            res.render('estudio.edit.ejs', {
                data: rows[0]
            })
        });
    });
};



controller.list_productoras=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('Select * from productora' , (err,productora) => {
            if(err){
                res.json(err);
            }
            console.log(productora);
            res.render('productora.view.ejs',{
                data: productora
            });
        
        });
     });
};

controller.save_productora = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO productora set ?', [data], (err, productora) => {
          console.log(productora)
          res.redirect('/productora');
  
        })
    })
};

controller.delete_productora = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM productora WHERE id_productora = ?', [id], (err, rows) => {
            res.redirect('/productora');
        });
    });
}

controller.update_productora = (req, res) => {
    const { id } = req.params;
    const newProductora = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE productora set ? where id_productora = ?', [newProductora, id], (err, rows) => {
            res.redirect('/productora');
        });
    });
};

controller.edit_productora = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM productora WHERE id_productora = ?", [id], (err, rows) => {
            res.render('productora.edit.ejs', {
                data: rows[0]
            })
        });
    });
};



controller.list_clientes=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('Select * from cliente' , (err,cliente) => {
            if(err){
                res.json(err);
            }
            console.log(cliente);
            res.render('clientes.view.ejs',{
                data: cliente
            });
        
        });
     });
};

controller.save_cliente = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO cliente set ?', [data], (err, cliente) => {
          console.log(cliente)
          res.redirect('/clientes');
  
        })
    })
};

controller.delete_cliente = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM cliente WHERE id_Cliente = ?', [id], (err, rows) => {
            res.redirect('/clientes');
        });
    });
}

controller.update_cliente = (req, res) => {
    const { id } = req.params;
    const newCliente = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cliente set ? where id_Cliente = ?', [newCliente, id], (err, rows) => {
            res.redirect('/clientes');
        });
    });
};

controller.edit_cliente = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM cliente WHERE id_Cliente = ?", [id], (err, rows) => {
            res.render('clientes.edit.ejs', {
                data: rows[0]
            })
        });
    });
};



controller.list_estudio_has_cliente=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('select em.nombre as nombre_estudio, c.nombre as nombre_cliente, emhc.id_Union from estudio_musica_has_cliente as emhc join estudio_de_música as em on em.id_estudio = emhc.Estudio_Musica_id_estudio join cliente as c on c.id_Cliente = emhc.Cliente_id_Cliente ' , (err,ehc) => {
            if(err){
                res.json(err);
            }
            console.log(ehc);
            res.render('ehc.view.ejs',{
                data: ehc
            });
        
        });
     });
};

controller.save_estudio_has_cliente = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO estudio_musica_has_cliente set ?', [data], (err, ehc) => {
          console.log(ehc)
          res.redirect('/estuio_has_clientes');
  
        })
    })
};

controller.delete_estudio_has_cliente = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM estudio_musica_has_cliente WHERE id_Union = ?', [id], (err, rows) => {
            res.redirect('/estuio_has_clientes');
        });
    });
}

controller.update_estudio_has_cliente = (req, res) => {
    const { id } = req.params;
    const newEhc = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE estudio_musica_has_cliente set ? where id_Union = ?', [newEhc, id], (err, rows) => {
            res.redirect('/estuio_has_clientes');
        });
    });
};

controller.edit_estudio_has_cliente = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM estudio_musica_has_cliente WHERE id_Union = ?", [id], (err, rows) => {
            res.render('ehc.edit.ejs', {
                data: rows[0]
            })
        });
    });
};

module.exports = controller;
