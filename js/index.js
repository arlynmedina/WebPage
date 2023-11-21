
function showDogInfoIndex(pageNumber = 1) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/dogs');
    xhr.send();
    
    const dogsPerPage = 6; 
    let items = '';
    let dogInfoIndex = document.getElementById('dogInfoIndex');
    let pagination = document.getElementById('pagination');

    xhr.onload = function () {
        let dogs = JSON.parse(xhr.response);

        const startIndex = (pageNumber - 1) * dogsPerPage;
        const endIndex = startIndex + dogsPerPage;

        for (let i = startIndex; i < endIndex && i < dogs.length; i++) {
            const dog = dogs[i];
            items += `<div class="col-lg-4 col-sm-6 mb-4">
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
        }

        items = `<div class="row">${items}</div>`;
        dogInfoIndex.innerHTML = items;

        const totalPages = Math.ceil(dogs.length / dogsPerPage);
        generatePaginationLinks(totalPages, pageNumber);
    }
}
function generatePaginationLinks(totalPages, currentPage) {
    let pagination = document.getElementById('pagination');
    let paginationHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<li class="active">${i}</li>`;
        } else {
            paginationHTML += `<li onclick="showDogInfoIndex(${i})">${i}</li>`;
        }
    }

    pagination.innerHTML = paginationHTML;
}
showDogInfoIndex();





