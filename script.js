document.getElementById('botonIngresar').addEventListener('click', function() {
    document.documentElement.style.backgroundImage = "url('2.jpeg')";
    // Mostrar el nuevo contenido
    document.getElementById('nuevoContenido').style.display = 'block';
    document.documentElement.classList.add('transicion-imagen');

    document.querySelector('.container').style.display = 'none';

    setTimeout(function() {
        document.documentElement.classList.remove('transicion-imagen');
    }, 1000);
});
document.getElementById('botonRegresar').addEventListener('click', function() {
    document.documentElement.style.backgroundImage = "url('1.png')";
    document.getElementById('nuevoContenido').style.display = 'none';

    document.getElementById('Regresar').style.display = 'block';

    document.documentElement.classList.add('transicion-imagen');
    setTimeout(function() {
        document.documentElement.classList.remove('transicion-imagen');
    }, 1000);
});

