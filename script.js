 
 // Máscara CPF
  document.getElementById("cpf").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
  });

  // Máscara CEP
  document.getElementById("cep").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "").slice(0, 8);
    e.target.value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
  });

  // Buscar endereço via CEP
  document.getElementById("cep").addEventListener("blur", function() {
    const cep = this.value.replace(/\D/g, "");
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            document.getElementById("endereco").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
          } else {
            alert("CEP não encontrado.");
          }
        });
    }
  });

  // Validação
  document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("emailConfirm").value;
    const senha = document.getElementById("senha").value;
    const confirmSenha = document.getElementById("senhaConfirm").value;
  })


 // Máscara data de nascimento
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("nascimento");
  document.getElementById("nascimento").addEventListener("label", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/(\d{2})(\d)/, "$2/$2");
    value = value.replace(/(\d{2})(\d)/, "$2/$2");
    e.target.value = value;
  });
})

// Máscara Celular
document.getElementById("celular").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
  if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

  // Aplica a máscara (99) 99999-9999
  if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    value = value.replace(/^(\d{0,2})/, "($1");
  }

  e.target.value = value;
});
