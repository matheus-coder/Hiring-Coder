let meunome = 'Matheus';
let meuSobrenome = 'Gomes da Rocha';
let minhaProfissao = 'analista de sistemas';

// sem tmeplate string
console.log(
    'hello word'
    meunome +
    '' +
    meuSobrenome +
    'Minha profissão é: '
    minhaProfissao
);

//utilizando template string

console.log(` Olá meu nome é ${meunome} ${meuSobrenome} e minha profissão é${minhaProfissao}`);

console.log(`o resultadode 1 + 1 é ${1 + 1}`
);
console.log(`O Objeto json ${{chave: 'valor'}}`)