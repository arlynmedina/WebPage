function prepararCarrito() {
    return new Promise((resolve, reject) => {
        console.log("en la funcion de preparar carrito");
        
        // Vaciamos la lista
        let listaIds = [];

        // Usuario 
        let usuario;

        // Obtenemos el correo del usuario desde el sessionStorage
        let correoUsuario = sessionStorage.getItem("correoUsuario");
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/users/' + correoUsuario);
        xhr.send();
        xhr.onload = () => {
            // Parseamos el resultado del servidor
            let usuarioActual = JSON.parse(xhr.responseText);
            let listadelusuario = usuarioActual.perrosDadosEnAdopcion;
            listadelusuario.forEach(element => {
                // Pusheamos en la lista que proximo guardaremos en el sessionStorage
                listaIds.push(element);
            });

            // Ya que acaba todo su show habremos traspasado la info de la lista de la base a la lista a pushear en el sessionStorage
            console.log("LISTA A PUSHEAR " + JSON.stringify(listaIds));
            sessionStorage.setItem("ListaImagenesPerros", JSON.stringify(listaIds));

            // Resolvemos la promesa
            resolve();
        };

        xhr.onerror = () => {
            // Rechazamos la promesa si hay un error en la solicitud
            reject(new Error("Error en la solicitud"));
        };

        console.log("Termine oficialmente de preparar el session");
        console.log("Session preparado: ", sessionStorage);
    });
}

async function showUserDogs() {
    try {
        ///esperamos a que el carrito este preparado
        await prepararCarrito();
        console.log("Preparacion de carrito terminada y oficialmente en la funcion");
        console.log("Carrito con el que trabajare en la funcion:" + sessionStorage);

        //importamos la lista del session
        let listaSession = JSON.parse(sessionStorage.getItem("ListaImagenesPerros"));
        //ahora lo que tenemos que hacer es usar el carrito que tenemos y traer la info de los perros por su id
        for (let i=0;i<listaSession.length;i++){
            //hacemos una llamada http con el id
            let xhr = new XMLHttpRequest();
            xhr.open("GET","http://localhost:3000/dogs/id/"+listaSession[i]);
            xhr.send();
            xhr.onload=()=>{
                console.log(`iteracion: ${i}`)
            }
        }

    } catch (error) {
        console.error("Error al preparar el carrito:", error);
    }
}

// Llamas a la función showUserDogs desde otro lugar
showUserDogs();

