const razaSeleccionada = require("./loginIn");

function showDogInfo(race){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/infodogs/' + race);
    xhr.send();
    xhr.onload = function(){
        let list = JSON.parse(xhr.response);
        console.log(list);
        console.log('tipo:' + typeof(list));
    }
}

showDogInfo(razaSeleccionada);