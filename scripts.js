document.getElementById("work-btn").addEventListener("click", function() {
    this.classList.add("active");
    this.classList.remove("inactive");
    document.getElementById("play-btn").classList.remove("active");
    document.getElementById("play-btn").classList.add("inactive");
});

document.getElementById("play-btn").addEventListener("click", function() {
    this.classList.add("active");
    this.classList.remove("inactive");
    document.getElementById("work-btn").classList.remove("active");
    document.getElementById("work-btn").classList.add("inactive");
});

document.querySelector('.menu-button').addEventListener('click', function() {
    this.classList.toggle('active'); // Alterna la clase active para mostrar la "X"
});

document.querySelector('.menu-button').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
});