// =========================
// FACILITA ERP
// JavaScript Base
// =========================

console.log("Facilita ERP carregado!");

document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(".btn");

    botoes.forEach(botao => {

        botao.addEventListener("mouseenter", function () {
            botao.style.transform = "scale(1.05)";
        });

        botao.addEventListener("mouseleave", function () {
            botao.style.transform = "scale(1)";
        });

    });

});
