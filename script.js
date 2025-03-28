// const botao = document.getElementById("botao");

// const titulo = document.querySelector("h2");
// const paragrafo = document.querySelector("p");

// botao.addEventListener("click", function () {
//     titulo.style.fontFamily = "Arial, sans-serif";
//     paragrafo.forEach(paragrafo => {
//         paragrafo.style.fontFamily = "Arial, sans-serif";
//     });
// });

const botao = document.querySelector("button");
const titulo = document.getElementById("titulo1");
const titulo2 = document.getElementById("titulo2");

let original = true;

botao.addEventListener("click", function () {
    if (original) {
        titulo.style.fontFamily = "Arial, sans-serif";
        titulo2.style.fontFamily = "Arial, sans-serif";
        sobre.style.fontFamily = "Arial, sans-serif";
    } else {
        titulo.style.fontFamily = "";
        titulo2.style.fontFamily = "";
        sobre.style.fontFamily = "";
    }
    original = !original;
});

