const pedidos = [
  {
    itens: [
      { nome: "Melancia", descricao: "Fruta fresca", quantidade: 1, codigo: "A001", imagem: "src/images/melancia.jpg" },
      { nome: "Pera", descricao: "Fruta fresca", quantidade: 1, codigo: "A002", imagem: "src/images/pera.jpg" }
    ]
  },
  {
    itens: [
      { nome: "Cogumelo", descricao: "Fresco", quantidade: 1, codigo: "A003", imagem: "src/images/cogumelo.jpg" }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header').innerHTML = `<h1>Histórico de Pedido</h1>`;
  document.querySelector('main').innerHTML = `
    ${pedidos.map(pedido => `
      ${pedido.itens.map(item => `
        <div class="pedido-item">
          <img src="${item.imagem}" alt="${item.nome}">
          <div>
            <strong>${item.nome}</strong><br>
            ${item.descricao}<br>
            Quantidade: ${item.quantidade}<br>
            Código: ${item.codigo}
          </div>
        </div>
      `).join('')}
    `).join('')}
  `;
  document.querySelector('.menu-bottom').innerHTML = `
    <a id="menuEstoque" title="Estoque" href="index.html">🏠</a>
    <a id="menuPedidos" class="active" title="Pedidos" href="pedidos.html">➕</a>
    <a id="menuCarrinho" title="Carrinho" href="carrinho.html">🛒</a>
  `;
});