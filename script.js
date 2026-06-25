document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de notícia carregada com sucesso!");

    const titulo = document.querySelector("h1");

    titulo.addEventListener("click", () => {
        alert("Black Clover continua sendo um dos animes mais populares entre os fãs!");
    });
});