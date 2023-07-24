import validator from './validator.js';
// FUNÇÃO QUE PEGA OS EVENTOS DO FORMULÁRIO E COLOCA NO CARD 
document.getElementById("nome").addEventListener("input", transferirDados);
document.getElementById("numero").addEventListener("input", transferirDados);
document.getElementById("validade").addEventListener("input", transferirDados);
document.getElementById("cvv").addEventListener("input", transferirDados);

// Função para transferir os dados de um input para outro
function transferirDados() {
  console.log("transferir")
  const valorOrigem1 = document.getElementById("nome").value;
  const valorOrigem2 = document.getElementById("numero").value;
  const valorOrigem3 = document.getElementById("validade").value;
  const valorOrigem4 = document.getElementById("cvv").value;

  document.getElementById("nomeCard").value = valorOrigem1;
  document.getElementById("numeroCard").value = valorOrigem2;
  document.getElementById("validadeCard").value = valorOrigem3;
  document.getElementById("cvvCard").value = valorOrigem4;
}


// Adicionando o evento de clique no botão "Confirmar"
const buttonConfirmar = document.querySelector('.button1'); //Procura o elemento button1
buttonConfirmar.addEventListener("click", function (event) {//Parte que executa a função quando clicar no botão
  event.preventDefault();

  //Essa variável pega o número do cartão digitado pelo usuario e guarda na variável numeroCartao
  const numeroCartaoInput = document.getElementById("numero");
  const numeroCartao = numeroCartaoInput.value;

  if (numeroCartao === "") {
    document.getElementById("mensagem").innerHTML = "Por favor, digite as informações do seu cartão de crédito para que possamos realizar a validação. "
  } else {
    const resultado = validator.validarCartao(numeroCartao); //Uma condição onde cada resultado gera um alert
    if (resultado) {
      document.getElementById("mensagem").innerHTML = "Parabéns! O cartão informado é válido e pode ser utilizado com segurança."
    } else {
      document.getElementById("mensagem").innerHTML = "Ops! O cartão informado é inválido. Por favor, verifique os dados e tente novamente."
    }

  }
});

document.getElementById("validade").addEventListener("keyup" , adicionarPontoValidade);
function adicionarPontoValidade() {
  const validade = document.getElementById("validade")
  if (validade.value.length === 2) {
    validade.value += "/";
  } 
}

document.getElementById("numero").addEventListener("input", mascaraNumeros);
function mascaraNumeros() {
  const numeroInput = document.getElementById("numero");
  const numeroCartao = numeroInput.value.trim().replace(/\s/g, ''); // Remove espaços em branco
  const numeroMascarado = validator.maskify(numeroCartao)
  const numeroCartaoInput = document.getElementById("numeroCard")
  numeroCartaoInput.value = numeroMascarado
}
  

