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

function moverPerro(){
    const nombreP = document.getElementById('nombre').value;
    const edadP = document.getElementById('edad').value;
    const razaP = document.getElementById('raza').value;
    const colorP = document.getElementById('color').value;
    const energiaP = selectedValue;
    const historialP = valoresHistorial;
    const problemasP = valoresProblemas;
    const medicamentosP = document.getElementById('medicamentos').value;
    const descripcionP = document.getElementById('descripcion').value;
    const imagenP = document.getElementById('fileInput').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    const dogJSON = {
        nombre: nombreP,
        edad: edadP,
        raza: razaP,
        color: colorP,
        energia: energiaP,
        historialMedico: historialP,
        problemasSalud: problemasP,
        medicamentos: medicamentosP,
        descripcion: descripcionP,
        imagen: imagenP,
        direccion: direccion,
        telefono: telefono,
        correo: correo
    };
    //obtenemos el string de los valores
    let perroString = JSON.stringify(dogJSON);
    
    // Obtenemos el correo del usuario que inició sesión
    let correoUsuario = sessionStorage.getItem("correoUsuario");
    
    // Creamos el nuevo esquema de usuario
    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://localhost:3000/users/" + correoUsuario);
    xhr2.send();
    xhr2.onload = () => {
    let usuarioViejo = JSON.parse(xhr2.response);
    
    // Obtenemos la lista vieja y le damos push
    let listaVieja = usuarioViejo.perrosDadosEnAdopcion || [];
    listaVieja.push(perroString);
    sessionStorage.setItem("LISTAFINAL",listaVieja);
    console.log(sessionStorage);

    let usuarioNuevo = {
        nombre: usuarioViejo.nombre,
        apellidos: usuarioViejo.apellidos,
        correo: usuarioViejo.correo,
        contra: usuarioViejo.contra,
        perrosDadosEnAdopcion: listaVieja,
        verificado: usuarioViejo.verificado
    };
    
    // Creamos la llamada para actualizar al usuario con su nuevo perro
    let xhr3 = new XMLHttpRequest();
    xhr3.open("PUT", "http://localhost:3000/users/updateList/" + correoUsuario);
    xhr3.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr3.send(JSON.stringify(usuarioNuevo));
    xhr3.onload = () => {
        console.log("Usuario actualizado con el nuevo perro");
    
        // Subimos el perro a la base de datos
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/dogs');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(dogJSON));
        console.log("Gracias por salvar una vida");
    };
    };
    //guardamos la imagen
    guardarImagen();
};


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

function guardarImagen() {
        let inputDeImagen = document.getElementById('fileInput');
    
        if (inputDeImagen.files.length > 0) {
            let archivoSeleccionado = inputDeImagen.files[0];
    
            var formData = new FormData();
            formData.append('archivo', archivoSeleccionado);
            console.log("tipo:"+typeof(formData));
            console.log("contenido:"+formData);
            // realizamos la solicitud de guardar nuestro documentos
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/upload');
            xhr.send(formData);
        } else {
            console.error('No se ha seleccionado ningún archivo.');
        }
        
        ///window.location.href = "userAdoptions.html";
}