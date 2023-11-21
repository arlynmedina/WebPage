window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.add('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function cambiarHome(){
    // Obtén los elementos de input
    let inputCorreo = document.getElementById("input-correo-iniciar-sesion");
    let inputContra = document.getElementById("contra-iniciar-sesion");
    
    // Obtén el valor de los inputs
    let correoUsuario = inputCorreo.value;
    let contraUsuario = inputContra.value;

    // Hacer una llamada al servidor para verificar si el usuario ya tiene una cuenta con nosotros
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/users/' + correoUsuario+"/"+contraUsuario);
    console.log("URL DE LLAMDA: "+'http://localhost:3000/users/' + correoUsuario+"/"+contraUsuario);
    xhr.send();

    xhr.onload = function(){
        //vemos el codigo que nos regrese la llamada
        const statusCode = xhr.status;
        console.log("EL STATUS DE LA LLAMADA ES: "+statusCode);
        if(statusCode==200){
            ///le damos la bienvenida
            alert("BIENVENIDO CHAVAL");
            ///agregamos al session storage el correo del usuario
            sessionStorage.setItem("correoUsuario",correoUsuario);
            //si coinciden lo mandamos al otro index
            window.location.replace("/WebPage/views/loginIn.html");
        }else if (statusCode===404){
            //la contra y el usuario no coinciden
            alert("Estimado usuario, no cuenta con una cuenta, registrese uwu");
            //ponemos en blanco los inputs
            inputCorreo.value="";
            inputContra.value="";
        }else{
            alert("ERES UN PENDEJO");
            //ponemos en blanco los inputs
            inputCorreo.value="";
            inputContra.value="";
        };
    };
};

function verificarse() {
    // Checamos si ya está verificado
    if (_checkVerification()) {
        alert("Ya estás verificado, crack");
    } else {
        // Obtenemos el correo del usuario que inició sesión
        let correoUsuario = sessionStorage.getItem("correoUsuario");

        // Hacemos una llamada al servidor para ver si el usuario ya está verificado
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/" + correoUsuario);
        xhr.send();
        xhr.onload = () => {
            let usuario = JSON.parse(xhr.response);
            if (usuario.verificado === true) {
                alert("Ya estas verificado mi amor");
            } else {
                window.open('/WebPage/views/certifiedUser.html', '_blank');
            }
        };
    }
}


function darDeAltaUsuario(){
    //obtenemos todos los valores de los inputs
    let nombre = document.getElementById("nombreRegistro").value;
    let apellidos = document.getElementById("apellidosRegistro").value;
    let correo = document.getElementById("correoRegistro").value;
    let contra = document.getElementById("contraRegistro").value;

    //validamos si el correo tiene formato correcto
    const estructuraCorreo = /^[a-zA-Z0-9\.\_\-]+@[a-zA-Z]+.[a-zA-Z]+[a-zA-Z\.]*$/

    //validamos si el formato del correo es correcto
    if(!estructuraCorreo.test(correo)){
        alert("Mal correo hermanito");
        return;
    };

    const usuarioAPostear = 
    {
        nombre:nombre,
        apellidos:apellidos,
        correo:correo,
        contra:contra,
        perrosDadosEnAdopcion:[],
        verificado:false
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST",'http://localhost:3000/users');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(usuarioAPostear));

    //le decimos que todo fino
    alert("Ya quedaste registrado papito, ahora puedes iniciar sesion");
}

function checkVerificacion(){
    //obtenemos el correo del usuario que inicio sesion
    let correoUsuario = sessionStorage.getItem("correoUsuario");

    ///hacemos una llamada al servidor para ver si el usuario ya esta verificado
    let xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:3000/users/"+correoUsuario);
    xhr.send();
    xhr.onload = () => {
        let usuario = JSON.parse(xhr.response);
        if(usuario.verificado === false){
            alert("VERIFICATE PENDEJA");
            return false;
        }else{
            window.open('/WebPage/views/userAdoptions.html','_blank')
        };
    };   
}

function _checkVerification(){
    //obtenemos el correo del usuario que inicio sesion
    let correoUsuario = sessionStorage.getItem("correoUsuario");

    ///hacemos una llamada al servidor para ver si el usuario ya esta verificado
    let xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:3000/users/"+correoUsuario);
    xhr.send();
    xhr.onload = () => {
        let usuario = JSON.parse(xhr.response);
        if(usuario.verificado === false){
            return false;
        }else{
            return true;
        };
    };   
}

function cerrarSesion(){
    //eliminamos el usuario del session storage
    sessionStorage.removeItem("correoUsuario");
    window.location.replace("/WebPage/views/index.html");
}
