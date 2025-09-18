window.onload = function () {
  const colaborador = JSON.parse(localStorage.getItem("colaborador"));
  if (!colaborador) {
    alert("Faça o cadastro primeiro!");
    window.location.href = "cadastro.html";
    return;
  }

  // Preenche os dados do colaborador
  document.querySelector(".dados").innerHTML = `
    <p>Matrícula: <span>${colaborador.matricula}</span></p>
    <p>Colaborador: <span>${colaborador.nome}</span></p>
    <p>Cidade: <span>${colaborador.cidade}</span></p>
    <p>Email: <span>${colaborador.email}</span></p>
  `;

  // Carregar itens do carrinho
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const itensContainer = document.querySelector(".itens");
  itensContainer.innerHTML = "<h2>Itens</h2>";

  carrinho.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <p>${item.nome} (SKU: ${item.sku})</p>
      <p>Quantidade: ${item.qtd}</p>
      <button onclick="removerItem(${index})">Remover</button>
    `;
    itensContainer.appendChild(div);
  });

  document.querySelector(".resumo span").textContent = carrinho.length;
};

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  location.reload();
}

function finalizarPedido() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  const colaborador = JSON.parse(localStorage.getItem("colaborador"));
  const novoPedido = {
    colaborador,
    itens: carrinho,
    data: new Date().toLocaleString(),
    status: "Pendente"
  };

  pedidos.push(novoPedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  localStorage.removeItem("carrinho");

  alert("Pedido finalizado!");
  window.location.href = "pedidos.html";
}

// const carrinho = [
//   { nome: "Melancia", descricao: "Fruta fresca", quantidade: 1, codigo: "A001", imagem: "src/images/melancia.jpg" },
//   { nome: "Pera", descricao: "Fruta fresca", quantidade: 2, codigo: "A002", imagem: "src/images/pera.jpg" }
// ];

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('main').innerHTML = `
//     <section class="dados">
//       <p><strong>Matrícula:</strong> Campo Obrigatório</p>
//       <p><strong>Colaborador:</strong> Campo Obrigatório</p>
//       <p><strong>Lacre rompido:</strong> Campo Obrigatório</p>
//       <p><strong>Lacre Novo:</strong> Campo Obrigatório</p>
//       <p><strong>Horário:</strong> Preenchimento Automático</p>
//       <p><strong>Vigilante:</strong> Campo Obrigatório</p>
//     </section>
//     <section class="itens">
//       <h2>Itens</h2>
//       ${carrinho.map(item => `
//         <div class="item">
//           <img src="${item.imagem}" alt="${item.nome}">
//           <div>
//             <strong>${item.nome}</strong><br>
//             ${item.descricao}<br>
//             Quantidade: ${item.quantidade}<br>
//             Código: ${item.codigo}
//           </div>
//         </div>
//       `).join('')}
//     </section>
//     <section class="resumo">
//       Total de itens: ${carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
//     </section>
//     <button class="finalizar">Fechar pedido</button>
//   `;

//   document.querySelector('.finalizar').addEventListener('click', () => {
//     alert('Pedido finalizado!');
//     // Aqui pode redirecionar ou salvar os dados
//   });
// });