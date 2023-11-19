const {Router} = require('express');
const router = Router();

//modelo
const InfoDog = require('../models/InfodogModel'); //modelo de usuario

//rutas de usuarios
router.get('/infodogs/:nombre',async(req,res)=>{
    try{
        // Obtener el nombre del parámetro en la URL
        const razaPerro = req.params.raza;

        // Buscar el usuario en la base de datos por el nombre
        const usuario = await InfoDog.findOne({ nombre: razaPerro });

        // Verificar si se encontró el usuario
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Devolver el usuario encontrado como respuesta
        res.status(200).json(usuario);

    }catch(error){
        res.status(500).send("No se pudo obtener la informacion del perro "+ error.message);
    }
});


module.exports = router;

