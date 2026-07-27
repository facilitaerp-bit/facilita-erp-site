const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", String(aberto));
    menuBtn.textContent = aberto ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("aberto");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}

const ano = document.getElementById("ano");
if (ano) {
  ano.textContent = new Date().getFullYear();
}

const formulario = document.getElementById("formulario");
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = formulario.elements.nome.value.trim();
    alert(`Obrigado, ${nome}! Sua solicitação foi registrada. Agora conectaremos este formulário ao WhatsApp ou ao seu atendimento.`);
    formulario.reset();
  });
}
