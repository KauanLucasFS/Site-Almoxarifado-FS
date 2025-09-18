const produtos = [
  { id: 1, nome: "Carta", codigo: "A001", imagem: "src/images/.jpg" },
  { id: 2, nome: "labtp", codigo: "A002", imagem: "src/images/.jpg" },
  { id: 3, nome: "Cogumelo", codigo: "A003", imagem: "src/images/.jpg" }
];

function renderProdutos(lista) {
  const main = document.querySelector('main');
  main.innerHTML = `<section class="grid-produtos">
    ${lista.map(prod => `
      <article class="produto">
        <img src="${prod.imagem}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>Código: ${prod.codigo}</p>
      </article>
    `).join('')}
  </section>`;
}

document.getElementById('searchInput').addEventListener('input', function(e) {
  const termo = e.target.value.toLowerCase();
  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo) || p.codigo.toLowerCase().includes(termo)
  );
  renderProdutos(filtrados);
});

renderProdutos(produtos);

// Renderiza menu inferior
  document.querySelector('.menu-bottom').innerHTML = `
    <a id="menuEstoque" class="active" title="Estoque" href="index.html">🏠</a>
    <a id="menuPedidos" title="Pedidos" href="pedidos.html">➕</a>
    <a id="menuCarrinho" title="Carrinho" href="carrinho.html">🛒</a>
  `;
