window.onload = function () {
  const colaborador = JSON.parse(localStorage.getItem("colaborador"));
  if (!colaborador) {
    alert("Você precisa fazer o cadastro primeiro!");
    window.location.href = "cadastro.html";
    return;
  }

  // Simulação de itens da MB52 (normalmente vem do SharePoint)
  const itens = [
    { sku: "001", nome: "Parafuso", qtd: 120, cidade: "Lucas" },
    { sku: "002", nome: "Cabo Elétrico", qtd: 50, cidade: "Sorriso" },
    { sku: "003", nome: "Tinta Azul", qtd: 30, cidade: "Primavera" },
    { sku: "004", nome: "Broca 10mm", qtd: 15, cidade: "Lucas" }
  ];

  // Filtrar pelos SKUs da cidade do colaborador
  const itensCidade = itens.filter(item => item.cidade === colaborador.cidade);

  // Renderizar cards
  const main = document.querySelector("main");
  itensCidade.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.nome}</h3>
      <p>SKU: ${item.sku}</p>
      <p>Quantidade: ${item.qtd}</p>
      <button onclick="adicionarAoCarrinho('${item.sku}','${item.nome}')">+</button>
    `;
    main.appendChild(card);
  });
};

function adicionarAoCarrinho(sku, nome) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ sku, nome, qtd: 1 });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(`${nome} adicionado ao carrinho!`);
}


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
