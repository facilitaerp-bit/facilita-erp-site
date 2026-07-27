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

const calculadoraForm = document.getElementById("calculadoraForm");
const resultado = document.getElementById("resultado");

if (calculadoraForm && resultado) {
  calculadoraForm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const faturamento = Number(document.getElementById("faturamento").value);
    const funcionarios = Number(document.getElementById("funcionarios").value);
    const horas = Number(document.getElementById("horas").value);
    const custoHora = Number(document.getElementById("custoHora").value);

    if ([faturamento, funcionarios, horas, custoHora].some((valor) => !Number.isFinite(valor) || valor < 0)) {
      resultado.innerHTML = "<span>Preencha todos os campos com valores válidos.</span>";
      return;
    }

    const custoRetrabalho = horas * 4.33 * custoHora * Math.max(funcionarios, 1);
    const perdaOperacional = faturamento * 0.01;
    const custoEstimadoAtual = custoRetrabalho + perdaOperacional;
    const economiaMensal = custoEstimadoAtual * 0.35;
    const economiaAnual = economiaMensal * 12;

    const moeda = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    resultado.innerHTML = `
      <span>Economia mensal estimada</span>
      <strong>${moeda.format(economiaMensal)}</strong>
      <span>Potencial anual: <b>${moeda.format(economiaAnual)}</b></span>
      <small>Estimativa ilustrativa baseada nos dados informados. O resultado real pode variar.</small>
    `;
  });
}

const formularioContato = document.getElementById("formularioContato");

if (formularioContato) {
  formularioContato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = formularioContato.elements.nome.value.trim();
    alert(`Obrigado, ${nome}! Sua solicitação foi registrada. Agora conectaremos este formulário ao WhatsApp ou ao atendimento do Facilita ERP.`);
    formularioContato.reset();
  });
}
