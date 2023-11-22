function showUserDogs() {
    let correoUsuario = sessionStorage.getItem("correoUsuario");

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/users/' + correoUsuario);
    xhr.send();
    let item = '';
    let UserDog = document.getElementById('UserDog');
    xhr.onload = function () {
        let info = JSON.parse(xhr.response);
        for (dog in info.perrosDadosEnAdopcion) {
            item += `<div class="col-lg-4 col-sm-6 mb-4">
                <div id = "dog-description" class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dog.imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dog.nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dog.raza}</div>
                    </div>
                </div>
            </div>`;
        }

        item = `<div class="row">${item}</div>`;
        UserDog.innerHTML = item;
    }
}