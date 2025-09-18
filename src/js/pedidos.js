window.onload = function () {
  const colaborador = JSON.parse(localStorage.getItem("colaborador"));
  if (!colaborador) {
    alert("Você precisa se cadastrar primeiro!");
    window.location.href = "cadastro.html";
    return;
  }

  // Recupera todos os pedidos
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  // Filtra apenas os pedidos do colaborador atual (pela matrícula)
  pedidos = pedidos.filter(p => p.colaborador.matricula === colaborador.matricula);

  const main = document.querySelector("main");

  if (pedidos.length === 0) {
    main.innerHTML = "<p>Você ainda não fez nenhum pedido.</p>";
    return;
  }

  pedidos.forEach(pedido => {
    const divPedido = document.createElement("div");
    divPedido.className = "pedido";

    let itensHtml = "";
    pedido.itens.forEach(item => {
      itensHtml += `
        <li>${item.nome} (SKU: ${item.sku}) - Quantidade: ${item.qtd}</li>
      `;
    });

    divPedido.innerHTML = `
      <h3>Pedido em ${pedido.data}</h3>
      <p>Status: <strong>${pedido.status}</strong></p>
      <ul>${itensHtml}</ul>
    `;

    main.appendChild(divPedido);
  });
};


// const pedidos = [
//   {
//     itens: [
//       { nome: "Melancia", descricao: "Fruta fresca", quantidade: 1, codigo: "A001", imagem: "src/images/melancia.jpg" },
//       { nome: "Pera", descricao: "Fruta fresca", quantidade: 1, codigo: "A002", imagem: "src/images/pera.jpg" }
//     ]
//   },
//   {
//     itens: [
//       { nome: "Cogumelo", descricao: "Fresco", quantidade: 1, codigo: "A003", imagem: "src/images/cogumelo.jpg" }
//     ]
//   }
// ];

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('header').innerHTML = `<h1>Histórico de Pedido</h1>`;
//   document.querySelector('main').innerHTML = `
//     ${pedidos.map(pedido => `
//       ${pedido.itens.map(item => `
//         <div class="pedido-item">
//           <img src="${item.imagem}" alt="${item.nome}">
//           <div>
//             <strong>${item.nome}</strong><br>
//             ${item.descricao}<br>
//             Quantidade: ${item.quantidade}<br>
//             Código: ${item.codigo}
//           </div>
//         </div>
//       `).join('')}
//     `).join('')}
//   `;
//   document.querySelector('.menu-bottom').innerHTML = `
//     <a id="menuEstoque" title="Estoque" href="index.html">🏠</a>
//     <a id="menuPedidos" class="active" title="Pedidos" href="pedidos.html">➕</a>
//     <a id="menuCarrinho" title="Carrinho" href="carrinho.html">🛒</a>
//   `;
// });