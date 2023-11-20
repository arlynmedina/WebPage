const itemsPerPage = 6; // Number of items to display per page
let currentPage = 1;

function showDogInfoIndex(selectedValue, page) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/dogs/${selectedValue}?_page=${page}&_limit=${itemsPerPage}`);
    xhr.send();
    let item = '';
    let dogInfoIndex = document.getElementById('dogInfoIndex');
    console.log(dogInfoIndex);
    xhr.onload = function () {
        let dogs = JSON.parse(xhr.response);
        dogs.forEach(dog => {
            item += `<div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
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
        });

        dogInfoIndex.innerHTML = item;
    }
}


function changePage(page) {
    currentPage = page;
    showDogInfoIndex(selectedValue, currentPage);
}


showDogInfoIndex(selectedValue, currentPage);
