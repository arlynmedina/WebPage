const {Router} = require('express');
const router = Router();

//modelo 
const Dog = require("../models/DogModel");

//ruta de perros
router.get("/dogs",async(req,res)=>{
    try{
        const perritos = await Dog.find();
        res.status(200).json(perritos);
    }catch(error){
        res.status(500).send("No se pudieron obtener los perritos");
    }
});

//ruta de perros en especifico
router.get("/dogs/:nombre",async(req,res)=>{
    try{
        //obtenemos el nombre del perro 
        const nombrePerro = req.params.nombre;

        //buscar el perro por el nombre que obtuvimos
        const perro = await Dog.findOne({
            nombre:nombrePerro
        });

        // Verificar si se encontró el perro
        if (!perro) {
            return res.status(404).json({ mensaje: 'Perro no encontrado' });
        }
        // Devolver el usuario encontrado como respuesta
        res.status(200).json(perro);

    }catch(error){
        res.status(500).send("No se pudo obtener el perro"+ error.message);
    }
});

router.post('/dogs',async(req,res)=>{
    try{
        //creamos del perro a guardar
        let nuevoPerrito = new Dog({
            nombre:req.body.nombre,
            edad:req.body.edad,
            raza:req.body.raza,
            color:req.body.color,
            energia:req.body.energia,
            historialMedico:req.body.historialMedico,
            problemasSalud: req.body.problemasSalud,
            medicamentos: req.body.medicamentos,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            correo: req.body.correo
        });
        let perritoGuardado = await nuevoPerrito.save();
        res.status(200).json(perritoGuardado);
    }catch(error){
        res.status(400).send(error);
    }
});

module.exports = router;