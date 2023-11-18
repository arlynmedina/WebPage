const mongoose = require('mongoose');

function agregarInput() {
    // Crear un nuevo input
    var nuevoInput = document.createElement("input");
    nuevoInput.type = "text";
    nuevoInput.name = "historialmedico[]";
    nuevoInput.placeholder = "Ingresa la vacuna";
    nuevoInput.style = "font-weight: 200; margin: 1px; margin-top: 10px; min-width: 70%;";

    // Obtener el contenedor y agregar el nuevo input
    var contenedor = document.getElementById("input-historial");
    contenedor.appendChild(nuevoInput);
}

function eliminarInput() {
      // Obtener el contenedor
      var contenedor = document.getElementById("input-historial");

      // Obtener la lista de elementos hijos (inputs y br)
      var elementos = contenedor.childNodes;

      // Verificar si hay al menos dos elementos para evitar eliminar el primer input
      if (elementos.length > 2) {
      // Eliminar el último input
          contenedor.removeChild(elementos[elementos.length - 1]);
      
      }
  }
  function agregarInput2() {
    // Crear un nuevo input
    var nuevoInput = document.createElement("input");
    nuevoInput.type = "text";
    nuevoInput.name = "problemsalud[]";
    nuevoInput.placeholder = "Ingresa el problema";
    nuevoInput.style = "font-weight: 200; margin: 1px; margin-top: 10px; min-width: 70%;";

    // Obtener el contenedor y agregar el nuevo input
    var contenedor = document.getElementById("input-salud");
    contenedor.appendChild(nuevoInput);
  }

  function eliminarInput2() {
      // Obtener el contenedor
      var contenedor = document.getElementById("input-salud");

      // Obtener la lista de elementos hijos (inputs y br)
      var elementos = contenedor.childNodes;

      // Verificar si hay al menos dos elementos para evitar eliminar el primer input
      if (elementos.length > 2) {
      // Eliminar el último input
          contenedor.removeChild(elementos[elementos.length - 1]);
      
      }
  }


let dogSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true
    },  
    edad: {
      type: Number,
      required: true
    },
    raza: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    energia: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    historialM: {
      type: [String],
      required: true
    },
    problemasS: {
      type: [String],
      required: true
    },
    medicamentos: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    },
    telefono: {
      type: Number,
      required: true
    },
    correo: {
      type: String,
      requires: true
    }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
