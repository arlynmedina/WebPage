const selectedValue = sessionStorage.getItem("selectedDogName");

function showDogInfo(selectedValue){
    console.log(selectedValue)
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/dogs/' + selectedValue);
    xhr.send();
    let item = '';
    let dogInfo = document.getElementById('dogInfo');
    console.log(dogInfo);
    xhr.onload = function(){
        let info = JSON.parse(xhr.response);
        console.log(info.personalidad);
    }
    
}