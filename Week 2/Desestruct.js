const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Rocha',
    idade: 22,
    profissao: 'analista de sistemas'
};

console.log(pessoa)

//imagine que voe esra recebebdo essas info açõa de algum serviço teceiro e voce queria quebrar essas iformações como quebrar

//separando por variaveis
//  let nome = pessoas.nome;
//  let sobrenome = pessoas.sobrenome; 
//  let idade = pessoa.idade;
//  let profissao = pessoa.profissao;
//  dessa forma podeos mandar patra varos lugares

// usando o desestruct para dessestruturas o ojeto pessoa, é uma forma de apresentar os dados
let { nome, sobrenome, idade, profissao } = pessoa; 
console.log(nome, sobrenome, idade, profissao);



