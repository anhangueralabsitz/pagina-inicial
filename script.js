var images = [
    'assets/agendamento-aula-pratica-1.png',
    'assets/agendamento-aula-pratica-2.png',
    'assets/agendamento-aula-pratica-3.png',
    'assets/agendamento-aula-pratica-4.png',
    'assets/agendamento-aula-pratica-5.png',
    'assets/agendamento-aula-pratica-6.png'
];
var currentIndex = 0;
var imageElement = document.getElementById('image');

setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.classList.add('hidden'); // Adiciona a classe para esconder a imagem

    // Espera 500ms para a transição ocorrer e então troca a imagem
    setTimeout(function() {
        imageElement.src = images[currentIndex];
        imageElement.classList.remove('hidden'); // Remove a classe para mostrar a nova imagem
    }, 700);
}, 3000); // Troca a cada 2 segundos

var images5 = [
    'assets/Relatorio-ação-social-1.jpg',
    'assets/Relatorio-ação-social-2.png',
    'assets/Relatorio-ação-social-3.jpg'
];
var currentIndex5 = 0;
var imageElement5 = document.getElementById('image5');

setInterval(function() {
    currentIndex5 = (currentIndex5 + 1) % images5.length;
    imageElement5.classList.add('hidden'); // Adiciona a classe para esconder a imagem

    // Espera 500ms para a transição ocorrer e então troca a imagem
    setTimeout(function() {
        imageElement5.src = images5[currentIndex5];
        imageElement5.classList.remove('hidden'); // Remove a classe para mostrar a nova imagem
    }, 700);
}, 3000); // Troca a cada 2 segundos