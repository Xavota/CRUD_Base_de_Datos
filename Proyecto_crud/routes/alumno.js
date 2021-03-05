const express= require("express");
const router= express.Router();
const alumnoController=require('../controllers/alumno.controller');

router.get('/', alumnoController.list);

router.get('/alumno', alumnoController.list_alumnos);
router.post('/alumno/add', alumnoController.save_alumno);
router.get('/alumno/update/:id', alumnoController.edit_alumno);
router.post('/alumno/update/:id', alumnoController.update_alumno);
router.get('/alumno/delete/:id', alumnoController.delete_alumno);

router.get('/estudio_musica', alumnoController.list_estudios);
router.post('/estudio_musica/add', alumnoController.save_estudio);
router.get('/estudio_musica/update/:id', alumnoController.edit_estudio);
router.post('/estudio_musica/update/:id', alumnoController.update_estudio);
router.get('/estudio_musica/delete/:id', alumnoController.delete_estudio);

router.get('/productora', alumnoController.list_productoras);
router.post('/productora/add', alumnoController.save_productora);
router.get('/productora/update/:id', alumnoController.edit_productora);
router.post('/productora/update/:id', alumnoController.update_productora);
router.get('/productora/delete/:id', alumnoController.delete_productora);

router.get('/clientes', alumnoController.list_clientes);
router.post('/clientes/add', alumnoController.save_cliente);
router.get('/clientes/update/:id', alumnoController.edit_cliente);
router.post('/clientes/update/:id', alumnoController.update_cliente);
router.get('/clientes/delete/:id', alumnoController.delete_cliente);

router.get('/estuio_has_clientes', alumnoController.list_estudio_has_cliente);
router.post('/estuio_has_clientes/add', alumnoController.save_estudio_has_cliente);
router.get('/estuio_has_clientes/update/:id', alumnoController.edit_estudio_has_cliente);
router.post('/estuio_has_clientes/update/:id', alumnoController.update_estudio_has_cliente);
router.get('/estuio_has_clientes/delete/:id', alumnoController.delete_estudio_has_cliente);

module.exports=router;