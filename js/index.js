document.getElementById('enlace').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace navegue inmediatamente
    var contenido = document.querySelector('.contenido');
    contenido.classList.add('desaparecer');
    
    // Espera a que la animación termine antes de navegar a la nueva página
    setTimeout(function() {
      window.location.href = './html/home.html';
    }, 1000); // La duración debe coincidir con la duración de la animación CSS
  });