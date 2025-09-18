// Quando carregar a página, verificar se já tem cadastro
window.onload = function () {
  const colaborador = localStorage.getItem("colaborador");
  if (colaborador) {
    // Se já tem cadastro, vai direto pro estoque
    window.location.href = "index.html";
  }
};

function salvarCadastro() {
  const matricula = document.getElementById("matricula").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const cidade = document.getElementById("cidade").value;
  const email = document.getElementById("email").value.trim();

  if (!matricula || !nome || !cidade || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  const colaborador = { matricula, nome, cidade, email };

  // Salvar no navegador (provisório)
  localStorage.setItem("colaborador", JSON.stringify(colaborador));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html"; // redireciona para Estoque
}