const itemsPerPage = 6; 
let currentPage = 1; 

function showDogInfoIndex(selectedValue, page) {
    let xhr = new XMLHttpRequest();
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    xhr.open('GET', 'http://localhost:3000/dogs');
    xhr.send();

    let item = '';
    let dogInfoIndex = document.getElementById('dogInfoIndex');
    
    xhr.onload = function () {
        let dogs = JSON.parse(xhr.response);

        endIndex = Math.min(endIndex, dogs.length);

        for (let i = startIndex; i < endIndex; i++) {
            item += `<div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" href="/WebPage/views/dogDescription.html">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${dogs[i].imagen}" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${dogs[i].nombre}</div>
                        <div class="portfolio-caption-subheading text-muted">${dogs[i].raza}</div>
                    </div>
                </div>
            </div>`;
        }

        dogInfoIndex.innerHTML = item;
    }
}

function paginate(page) {
    currentPage = page;
    showDogInfoIndex(selectedValue, currentPage);
}

buttonElement.addEventListener('click', function() {
    paginate(2); 
});