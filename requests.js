async function getCep(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  let response = await fetch(url);
  return await response.json();
}

function registerLog(msg, obj) {
  console.log(msg, obj);
}

async function getAndLogCep(cep) {
  let dados = await getCep(cep);
  registerLog("dentro do async", dados);
  return dados;
}

function teste(n, cep) {
  console.log(`chamada ${n}`);
  let dados = getAndLogCep(cep);
  console.log("fora da async", dados);

  dados.then((t) => console.log("then", t));
}

teste(1, "01122000");
teste(2, "00000000");
