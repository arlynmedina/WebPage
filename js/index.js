const selectedValue = sessionStorage.getItem("selectedValue");

function showDogInfoIndex(selectedValue) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/dogs/' + selectedValue);
    xhr.send();
    let item = '';
    let dogInfoIndex = document.getElementById('dogInfoIndex');
    console.log(dogInfoIndex);
    xhr.onload = function () {
        let dogs = JSON.parse(xhr.response);
        item += `<div class="row">
        <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
                <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="${dogs.imagen}" alt="..." />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">${dogs.nombre}</div>
                    <div class="portfolio-caption-subheading text-muted">${dogs.raza}</div>
                </div>
            </div>
        </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dogs.imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dogs.nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dogs.raza}</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dogs.imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dogs.nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dogs.raza}</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <div class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dogs.imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dogs.nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dogs.raza}</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                <div class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dogs.imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dogs.nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dogs.raza}</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dogs.imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dogs.nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dogs.raza}</div>
                    </div>
                </div>
            </div>
        </div>`
        dogInfoIndex.innerHTML = item;
    }
}
showDogInfoIndex(selectedValue);