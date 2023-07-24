function validarCartao(numero) { //Exportando a função para index.js 

  const cartaoLimpo = removerNaoNumericos(numero);
  if (!cartaoLimpo) return false; //Condição para ver se existe número digitado

  let total = 0;
  let dobro = false;

  for (let i = cartaoLimpo.length - 1; i >= 0; i--) {
    let digito = parseInt(cartaoLimpo.charAt(i), 10);

    if (dobro) {
      digito *= 2; //Multiplica por 2
      if (digito > 9) { //Se tiver algum digito maior que nove, subtrai 9
        digito -= 9;
      }
    }

    total += digito;
    dobro = !dobro;
  }

  return total % 10 === 0; //Após o loop, faz o resto para ver se o número é divisível por 10
}

// Função auxiliar para remover caracteres não numéricos
function removerNaoNumericos(str) {
  return str.replace(/\D/g, '');
}


function maskify(numeroCartao) {
  
  if (numeroCartao.length >= 4) { 
    const ultimos4Digitos = numeroCartao.slice(-4); // Obtém os últimos 4 dígitos
    const numeroOculto = "#".repeat(numeroCartao.length - 4) + ultimos4Digitos; // Oculta todos os caracteres, exceto os últimos 4
    return numeroOculto;
  }
  return numeroCartao
}



export default { validarCartao, maskify };

