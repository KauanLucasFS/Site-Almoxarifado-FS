document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.dadosCadastro');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const matricula = form.querySelector('[name="matricula"]').value.trim();
    const nome = form.querySelector('[name="nome"]').value.trim();
    const cidade = form.querySelector('[name="cidade"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();

    if (!matricula || !nome || !cidade || !email) {
      alert('Preencha todos os campos!');
      return;
    }

    const colaborador = {
      matricula,
      nome,
      cidade,
      email,
      cargo: '',   // Adicione se houver campo
      numero: ''   // Adicione se houver campo
    };
    
    // Salva localmente para visualização imediata
    localStorage.setItem('colaborador', JSON.stringify(colaborador));

    
    // Salva no SharePoint (exemplo)
    // try {
    //   await fetch('https://SEU_SITE.sharepoint.com/_api/web/lists/getbytitle(\'Colaboradores\')/items', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json;odata=verbose',
    //       'Content-Type': 'application/json;odata=verbose',
    //       'X-RequestDigest': document.getElementById('__REQUESTDIGEST').value // SharePoint token
    //     },
    //     body: JSON.stringify({
    //       __metadata: { type: 'SP.Data.ColaboradoresListItem' },
    //       Matricula: matricula,
    //       Nome: nome,
    //       Cidade: cidade,
    //       Email: email
    //       // Adicione outros campos conforme necessário
    //     })
    //   });
    //   alert('Cadastro realizado com sucesso!');
    //   window.location.href = "perfil.html";
    // } catch (err) {
    //   alert('Erro ao salvar no SharePoint.');
    //   console.error(err);
    // }
  });
});