const carrinho = [
  { nome: "Melancia", descricao: "Fruta fresca", quantidade: 1, codigo: "A001", imagem: "src/images/melancia.jpg" },
  { nome: "Pera", descricao: "Fruta fresca", quantidade: 2, codigo: "A002", imagem: "src/images/pera.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main').innerHTML = `
    <section class="dados">
      <p><strong>Matrícula:</strong> Campo Obrigatório</p>
      <p><strong>Colaborador:</strong> Campo Obrigatório</p>
      <p><strong>Lacre rompido:</strong> Campo Obrigatório</p>
      <p><strong>Lacre Novo:</strong> Campo Obrigatório</p>
      <p><strong>Horário:</strong> Preenchimento Automático</p>
      <p><strong>Vigilante:</strong> Campo Obrigatório</p>
    </section>
    <section class="itens">
      <h2>Itens</h2>
      ${carrinho.map(item => `
        <div class="item">
          <img src="${item.imagem}" alt="${item.nome}">
          <div>
            <strong>${item.nome}</strong><br>
            ${item.descricao}<br>
            Quantidade: ${item.quantidade}<br>
            Código: ${item.codigo}
          </div>
        </div>
      `).join('')}
    </section>
    <section class="resumo">
      Total de itens: ${carrinho.reduce((acc, item) => acc + item.quantidade, 0)}
    </section>
    <button class="finalizar">Fechar pedido</button>
  `;

  document.querySelector('.finalizar').addEventListener('click', () => {
    alert('Pedido finalizado!');
    // Aqui pode redirecionar ou salvar os dados
  });
});