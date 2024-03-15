function registerLog(msg, obj) {
  console.log(msg, obj);
}

function preencheForm(dados) {
  // preenche os dados no html
}

function getAndLogCep(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      if ("erro" in dados) {
        console.log('deu ruim, levantando erro...')
        throw Error("Cep não encontrado");
      }
      registerLog("then", dados);
    })
    .catch((e) => console.log(e));
}

getAndLogCep("01122000");
getAndLogCep("00000000");
