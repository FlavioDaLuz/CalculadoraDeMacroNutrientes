const usuario = {
    email:'123',
    senha:'minhaSenha',
    teste:''
}


let temCampoVazio = false;

for (const propriedade in usuario) {
  if (usuario[propriedade] === '') {
    temCampoVazio = true;
    break; // Para parar o loop após encontrar o primeiro campo vazio
  }
}

if (temCampoVazio) {
  console.log('Existem campos vazios no objeto!');
} else {
  console.log('Todos os campos do objeto estão preenchidos! teste teste testando');
}
//what is happening