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