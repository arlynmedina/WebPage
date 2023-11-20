const {Router} = require('express');
const router = Router();

//modelo
const User = require('../models/UserModel'); //modelo de usuario

//rutas de usuarios
router.get('/users',async(req,res)=>{
    try{
        const usuarios = await User.find();
        res.status(200).json(usuarios);
    }catch(error){
        res.status(500).send("No se pudieron obtener los usuarios "+ error.message);
    }
});

router.post('/users',async(req,res)=>{
    try{
        //se crea el cuerpo del nuevo usuario a guardar
        let nuevoUsuario = new User({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            contra: req.body.contra,
            perrosDadosEnAdopcion: req.body.perrosDadosEnAdopcion,
        });
        //encriptamos la contra
        let contraEncriptada = nuevoUsuario.encriptarContra(req.body.contra);
        //asiganmos la nueva contra
        nuevoUsuario.contra = contraEncriptada; 

        //lo guardamos en la base de datos
        let usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    }catch(error){
        res.status(400).send(error);
    };
});

module.exports = router;

