document.addEventListener('DOMContentLoaded', () => {
  function renderPerfil(editMode = false) {
    const colaborador = JSON.parse(localStorage.getItem('colaborador')) || {
      matricula: '',
      nome: '',
      cidade: '',
      cargo: '',
      email: '',
      numero: ''
    };

    document.querySelector('.cabeca').innerHTML = `
      <a href="index.html"><button class="btnVoltar">←</button></a>
      <h1>Cadastro do colaborador</h1>
    `;

    document.querySelector('main').innerHTML = `
      <section class="dadosUsuario">
        ${editMode ? `
          <label>Matrícula:<input type="text" id="matricula" value="${colaborador.matricula}"></label>
          <label>Colaborador:<input type="text" id="nome" value="${colaborador.nome}"></label>
          <label>Cidade:<input type="text" id="cidade" value="${colaborador.cidade}"></label>
          <label>Cargo:<input type="text" id="cargo" value="${colaborador.cargo}"></label>
          <label>Email:<input type="email" id="email" value="${colaborador.email}"></label>
          <label>Número:<input type="text" id="numero" value="${colaborador.numero}"></label>
        ` : `
          <p><strong>Matrícula:</strong> ${colaborador.matricula || '-'}</p>
          <p><strong>Colaborador:</strong> ${colaborador.nome || '-'}</p>
          <p><strong>Cidade:</strong> ${colaborador.cidade || '-'}</p>
          <p><strong>Cargo:</strong> ${colaborador.cargo || '-'}</p>
          <p><strong>Email:</strong> ${colaborador.email || '-'}</p>
          <p><strong>Número:</strong> ${colaborador.numero || '-'}</p>
        `}
      </section>
      ${editMode
        ? `<button class="salvar-alteracao">Salvar Alteração</button>`
        : `<button class="alterar-informacoes">Alterar informações</button>`
      }
    `;

    if (!editMode) {
      document.querySelector('.alterar-informacoes').onclick = () => renderPerfil(true);
    } else {
      document.querySelector('.salvar-alteracao').onclick = () => {
        const novoColaborador = {
          matricula: document.getElementById('matricula').value,
          nome: document.getElementById('nome').value,
          cidade: document.getElementById('cidade').value,
          cargo: document.getElementById('cargo').value,
          email: document.getElementById('email').value,
          numero: document.getElementById('numero').value
        };
        localStorage.setItem('colaborador', JSON.stringify(novoColaborador));
        renderPerfil(false);
      };
    }
  }

  renderPerfil(false);
});

window.onload = function () {
  const colaborador = JSON.parse(localStorage.getItem("colaborador"));

  if (colaborador) {
    document.getElementById("perfilMatricula").textContent = colaborador.matricula;
    document.getElementById("perfilNome").textContent = colaborador.nome;
    document.getElementById("perfilCidade").textContent = colaborador.cidade;
    document.getElementById("perfilEmail").textContent = colaborador.email;
  } else {
    alert("Nenhum cadastro encontrado. Redirecionando...");
    window.location.href = "cadastro.html";
  }
};

function editarPerfil() {
  const colaborador = JSON.parse(localStorage.getItem("colaborador"));

  // Troca spans por inputs
  document.getElementById("perfilNome").innerHTML =
    `<input type="text" id="editNome" value="${colaborador.nome}">`;
  document.getElementById("perfilCidade").innerHTML =
    `<select id="editCidade">
      <option ${colaborador.cidade === "Lucas" ? "selected" : ""}>Lucas</option>
      <option ${colaborador.cidade === "Sorriso" ? "selected" : ""}>Sorriso</option>
      <option ${colaborador.cidade === "Primavera" ? "selected" : ""}>Primavera</option>
    </select>`;
}

function salvarPerfil() {
  let colaborador = JSON.parse(localStorage.getItem("colaborador"));

  colaborador.nome = document.getElementById("editNome").value;
  colaborador.cidade = document.getElementById("editCidade").value;

  localStorage.setItem("colaborador", JSON.stringify(colaborador));
  alert("Dados atualizados!");
  location.reload();
}