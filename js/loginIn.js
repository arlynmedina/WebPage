const dropdownItems = document.querySelectorAll('.perros');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
                
        // Obtiene el valor seleccionado
        const selectedValue = item.getAttribute('data-value');

                // Guarda el valor seleccionado en el almacenamiento local
        sessionStorage.setItem('selectedValue', selectedValue);

                // Redirige a la otra página
        window.location.href = '../views/dogBreedInfo.html';
    });
});
