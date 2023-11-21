function certificarUsuario(){
     //obtenemos el correo del usuario que inicio sesion
    let correoUsuario = sessionStorage.getItem("correoUsuario");
    let usuarioACambiar = {} 

    ///hacemos una llamada al servidor para ver si el usuario ya esta verificado
    let xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:3000/users/"+correoUsuario);
    xhr.send();
    xhr.onload = ()=>{
        //creamos el usuario nuevo a postear con el verificado en true
        let usuario = JSON.parse(xhr.response);
        usuarioACambiar = {
            nombre:usuario.nombre,
            apellidos:usuario.apellidos,
            correo:usuario.correo,
            contra:usuario.contra,
            perrosDadosEnAdopcion: usuario.perrosDadosEnAdopcion,
            verificado:usuario.true
        };
    };

    ///hacer una nueva llamda al servidor para poner los datos nuevos
    let xhr2 = new XMLHttpRequest();
    xhr2.open("PUT","http://localhost:3000/users/"+correoUsuario);
    xhr2.send(JSON.stringify(usuarioACambiar));
    alert("Gracias por la ceritifacion capo crack mastodonte");
    
};