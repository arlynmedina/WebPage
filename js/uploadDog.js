
const submitButton = document.getElementById('submit-dog');
const ratingDiv = document.getElementById('energia');
const radioButtons = ratingDiv.querySelectorAll('input[type="radio"]');
let selectedValue = null;
let valoresHistorial = [];
let valoresProblemas = [];
let nameHistory = 1
let nameProblems = 1

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        selectedValue = radioButton.value;
    });
});

submitButton.addEventListener('click', () => {
    const nombreP = document.getElementById('nombre').value;
    const edadP = document.getElementById('edad').value;
    const razaP = document.getElementById('raza').value;
    const colorP = document.getElementById('color').value;
    const energiaP = selectedValue;
    const historialP = valoresHistorial
    const problemasP = valoresProblemas
    const medicamentosP = document.getElementById('medicamentos').value;
    const descripcionP = document.getElementById('descripcion').value;
    const imagenP = document.getElementById('imagenPerro').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
})

function agregarInput() {
    // Crear un nuevo input
    var nuevoInput = document.createElement("input");
    nuevoInput.type = "text";
    nuevoInput.name = nameHistory;
    nuevoInput.placeholder = "Ingresa la vacuna";
    nuevoInput.style = "font-weight: 200; margin: 1px; margin-top: 10px; min-width: 70%;";
    nameHistory += 1
    nuevoInput.onblur = function () {
        agregarValor(this);
    };
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
        if(elementos[elementos.length - 1].value != '')
            valoresHistorial.pop();
        contenedor.removeChild(elementos[elementos.length - 1]);
      }
  }
  function agregarInput2() {
    // Crear un nuevo input
    var nuevoInput = document.createElement("input");
    nuevoInput.type = "text";
    nuevoInput.name = nameProblems;
    nuevoInput.placeholder = "Ingresa el problema";
    nuevoInput.style = "font-weight: 200; margin: 1px; margin-top: 10px; min-width: 70%;";
    nameProblems += 1;
    nuevoInput.onblur = function () {
        agregarValor2(this);
    };

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
        if(elementos[elementos.length - 1].value != '')
            valoresProblemas.pop();
        contenedor.removeChild(elementos[elementos.length - 1]);
      
      }
  }


    // Función para agregar el valor del input a la lista
    function agregarValor(inputValue) {
        console.log(inputValue.value)
        // Obtener el valor del input
        if (inputValue.name <= valoresHistorial.length){
            valoresHistorial[inputValue.name] = inputValue.value
        }
        else{
            valoresHistorial.push(inputValue.value);
        }
    }

    function agregarValor2(inputValue) {
        // Obtener el valor del input
        if (inputValue.name <= valoresProblemas.length){
            valoresProblemas[inputValue.name] = inputValue.value
        }
        else{
            valoresProblemas.push(inputValue.value);
        }
    }